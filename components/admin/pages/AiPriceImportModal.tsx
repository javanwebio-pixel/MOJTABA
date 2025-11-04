
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import CloseIcon from '../../icons/CloseIcon';
import { RocketIcon } from '../../dashboard/DashboardIcons';

const AiPriceImportModal = ({ isOpen, onClose, customers, onImport }) => {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('idle'); // idle, processing, success, error
    const [message, setMessage] = useState('یک فایل با فرمت CSV انتخاب کنید که شامل ستون‌های "نام مشتری"، "کد محصول" و "قیمت سفارشی" باشد.');

    if (!isOpen) return null;

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setStatus('idle');
            setMessage(`فایل انتخاب شده: ${e.target.files[0].name}`);
        }
    };

    const processFileWithAI = async () => {
        if (!file) {
            setStatus('error');
            setMessage('لطفا یک فایل را برای پردازش انتخاب کنید.');
            return;
        }

        setStatus('processing');
        setMessage('در حال تجزیه و تحلیل فایل توسط هوش مصنوعی... این عملیات ممکن است کمی طول بکشد.');

        try {
            const fileContent = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event) => resolve(event.target.result);
                reader.onerror = (error) => reject(error);
                reader.readAsText(file);
            });
            
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            const schema = {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        customerName: { type: Type.STRING, description: "نام کامل مشتری یا شرکت" },
                        productPrices: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    productCode: { type: Type.STRING, description: "کد منحصر به فرد محصول" },
                                    customPrice: { type: Type.STRING, description: "قیمت سفارشی برای مشتری" }
                                },
                                required: ['productCode', 'customPrice']
                            }
                        }
                    },
                    required: ['customerName', 'productPrices']
                }
            };
            
            const prompt = `شما یک پردازشگر داده هوشمند هستید. من محتوای یک فایل CSV را در اختیار شما قرار می‌دهم که شامل قیمت‌های سفارشی محصولات برای مشتریان مختلف است. ستون‌ها به ترتیب "نام مشتری"، "کد محصول" و "قیمت سفارشی" هستند. وظیفه شما این است که این داده‌ها را به یک آرایه JSON ساختاریافته تبدیل کنید. هر آبجکت در آرایه باید نماینده یک مشتری باشد و شامل نام او و لیستی از محصولات با قیمت‌های سفارشی‌شان باشد. فرمت خروجی باید دقیقا به این صورت باشد: '[{"customerName": "نام مشتری", "productPrices": [{"productCode": "کد محصول", "customPrice": "قیمت"}]}]'. قیمت‌ها را به صورت رشته حفظ کنید. محتوای CSV:\n\n${fileContent}`;

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
                config: {
                    responseMimeType: 'application/json',
                    responseSchema: schema
                }
            });

            const aiData = JSON.parse(response.text);
            
            const newPrices = {};
            let customersFound = 0;
            let pricesImported = 0;
            aiData.forEach(customerData => {
                const customer = customers.find(c => c.company === customerData.customerName || c.name === customerData.customerName);
                if (customer) {
                    customersFound++;
                    if (!newPrices[customer.id]) newPrices[customer.id] = {};
                    customerData.productPrices.forEach(p => {
                        newPrices[customer.id][p.productCode] = p.customPrice;
                        pricesImported++;
                    });
                }
            });

            onImport(newPrices);
            setStatus('success');
            setMessage(`عملیات موفقیت‌آمیز بود! ${pricesImported} قیمت سفارشی برای ${customersFound} مشتری وارد شد.`);
            
        } catch (error) {
            console.error("AI Price Import Error:", error);
            setStatus('error');
            setMessage('خطایی در پردازش فایل رخ داد. لطفا ساختار فایل CSV را بررسی کرده و دوباره تلاش کنید.');
        }
    };
    
    const getStatusColor = () => {
        switch(status) {
            case 'processing': return 'text-blue-600';
            case 'success': return 'text-green-600';
            case 'error': return 'text-red-600';
            default: return 'text-gray-600';
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 border-b flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2"><RocketIcon/> ورود قیمت‌ها با هوش مصنوعی</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800">
                        <CloseIcon />
                    </button>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/></svg>
                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">برای انتخاب فایل کلیک کنید</span> یا فایل را بکشید و رها کنید</p>
                                <p className="text-xs text-gray-500">فرمت CSV</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" accept=".csv" onChange={handleFileChange} />
                        </label>
                    </div>
                    <div className={`text-sm text-center p-2 rounded-md ${getStatusColor()}`}>
                        {message}
                    </div>
                </div>
                <div className="p-6 pt-2 flex justify-end gap-3 border-t">
                    <button type="button" onClick={onClose} className="bg-gray-100 text-gray-700 font-semibold px-5 py-2 rounded-lg hover:bg-gray-200">
                        {status === 'success' ? 'بستن' : 'انصراف'}
                    </button>
                    <button 
                        type="button" 
                        onClick={processFileWithAI}
                        disabled={!file || status === 'processing'}
                        className="bg-teal-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-teal-600 flex items-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        {status === 'processing' ? 'در حال پردازش...' : 'شروع پردازش'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AiPriceImportModal;
