
import React, { useState } from 'react';
import { BackIcon } from '../../dashboard/DashboardIcons';
import SearchIcon from '../../icons/SearchIcon';
import { allProducts } from '../../../data/initialData';

const EditableField = ({ label, value, type="text" }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input 
            type={type} 
            defaultValue={value}
            className="w-full bg-white border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
);


const InputField = ({ label, type = "text", placeholder = "" }) => (
     <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input 
            type={type} 
            placeholder={placeholder}
            className="w-full bg-white border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
);

const CustomerDetail = ({ customer, onBack, customPrices }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const filteredProducts = allProducts.filter(p => p.name.includes(searchTerm) || p.code.includes(searchTerm));

    return (
        <div>
            <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black mb-6">
                <BackIcon />
                بازگشت به لیست مشتریان
            </button>
            
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-800 border-b pb-4 mb-6">اطلاعات مشتری</h2>
                        <div className="space-y-4">
                            <EditableField label="نام مشتری" value={customer.name} />
                            <EditableField label="شرکت" value={customer.company} />
                            <EditableField label="ایمیل" value={customer.email} type="email" />
                            <EditableField label="شماره موبایل" value={customer.phone} />
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">وضعیت</label>
                                <select defaultValue={customer.status} className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>فعال</option>
                                    <option>غیرفعال</option>
                                    <option>در انتظار تایید</option>
                                </select>
                            </div>
                            <button className="w-full mt-4 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600">
                                ذخیره اطلاعات
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-800 border-b pb-4 mb-6">مدیریت دسترسی</h2>
                        <div className="space-y-4">
                           <InputField label="نام کاربری" placeholder="مثال: arman-co" />
                           <InputField label="رمز عبور جدید" type="password" placeholder="••••••••" />
                           <button className="w-full mt-4 bg-gray-700 text-white font-semibold py-2 rounded-lg hover:bg-gray-800">
                                ثبت/تغییر رمز عبور
                           </button>
                           <button className="w-full mt-2 border border-blue-500 text-blue-500 font-semibold py-2 rounded-lg hover:bg-blue-50">
                                ورود به پنل مشتری
                           </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
                     <h2 className="text-lg font-semibold text-gray-800">قیمت‌گذاری اختصاصی محصولات</h2>
                     <p className="text-sm text-gray-500 mb-4">برای این مشتری قیمت‌های متفاوتی تعریف کنید. فیلدهای خالی از قیمت پیش‌فرض استفاده می‌کنند.</p>

                      <div className="relative w-full mb-4">
                        <input 
                            type="text" 
                            placeholder="جستجوی محصول..." 
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pr-10 pl-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                            <SearchIcon />
                        </div>
                    </div>

                    <div className="overflow-auto max-h-[500px]">
                        <table className="w-full text-sm text-right">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
                                <tr>
                                    <th className="px-4 py-3">محصول</th>
                                    <th className="px-4 py-3">قیمت پیش‌فرض (تومان)</th>
                                    <th className="px-4 py-3">قیمت سفارشی (تومان)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProducts.map(product => (
                                    <tr key={product.code} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-3 font-medium text-gray-800">{product.name} <span className="text-gray-400 font-normal">({product.code})</span></td>
                                        <td className="px-4 py-3 text-gray-600">{product.price}</td>
                                        <td className="px-4 py-3">
                                            <input type="text" placeholder="پیش‌فرض" defaultValue={customPrices[product.code] || ''} className="w-full text-left bg-white border border-gray-300 rounded-md py-1 px-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                     <button className="w-full mt-6 bg-green-500 text-white font-bold py-2.5 rounded-lg hover:bg-green-600">
                        ذخیره قیمت‌ها
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetail;
