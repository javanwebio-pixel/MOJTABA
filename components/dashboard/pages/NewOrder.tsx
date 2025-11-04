
import React, { useState } from 'react';
import { TrashIcon } from '../DashboardIcons';

const initialCartItems = [
    { id: 1, name: 'لوله تک لایه PPR سایز ۲۰', code: 'KB-101-20', price: 45000, quantity: 10, imageUrl: 'https://kavirbaspar.com/wp-content/uploads/2022/02/taklayeh.jpg' },
    { id: 2, name: 'زانویی ۹۰ درجه', code: 'KB-A201', price: 12000, quantity: 50, imageUrl: 'https://kavirbaspar.com/wp-content/uploads/2022/03/%D8%B2%D8%A7%D9%86%D9%88-90-%D8%AF%D8%B1%D8%AC%D9%87-1-1.jpg' },
    { id: 3, name: 'شیر فلکه', code: 'KB-V401', price: 150000, quantity: 5, imageUrl: 'https://kavirbaspar.com/wp-content/uploads/2022/03/%D8%B4%DB%8C%D8%B1-%D9%81%D9%84%DA%A9%D9%87-1-1.jpg' },
];

const ShoppingCart = ({ customPrices }: { customPrices: { [productCode: string]: string } }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const cartItems = initialCartItems.map(item => {
        const customPriceStr = customPrices?.[item.code];
        const effectivePrice = customPriceStr ? parseInt(customPriceStr.replace(/,/g, ''), 10) : item.price;
        return {
            ...item,
            displayPrice: effectivePrice,
            hasCustomPrice: !!customPriceStr
        };
    });

    const subtotal = cartItems.reduce((acc, item) => acc + item.displayPrice * item.quantity, 0);
    const tax = subtotal * 0.09;
    const total = subtotal + tax;

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div>
                <h1 className="text-2xl font-bold text-gray-800">درخواست شما ثبت شد</h1>
                 <div className="mt-8 bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
                    <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mt-6">درخواست شما با موفقیت ثبت شد</h2>
                    <p className="mt-2 text-gray-600 max-w-md">
                        پس از بررسی و تایید توسط کارشناسان ما، نتیجه از طریق پیامک به شما اطلاع‌رسانی خواهد شد. از شکیبایی شما سپاسگزاریم.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-8 bg-blue-500 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-600 transition-colors">
                        بازگشت به سبد خرید
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800">سبد خرید</h1>
            <p className="mt-1 text-gray-500">سفارش خود را بازبینی و جهت تایید ارسال کنید.</p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-800 border-b pb-4">محصولات ({cartItems.length})</h2>
                    <div className="mt-4 space-y-6">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center gap-4">
                                <img src={item.imageUrl} alt={item.name} className="h-20 w-20 object-contain rounded-md bg-gray-100 p-1" />
                                <div className="flex-grow">
                                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-sm text-gray-500">کد: {item.code}</p>
                                    <div className="text-sm font-bold text-blue-600 mt-1 flex items-center gap-2">
                                        <span>{item.displayPrice.toLocaleString('fa-IR')} تومان</span>
                                        {item.hasCustomPrice && <span className="text-xs text-green-600 font-semibold">(قیمت ویژه)</span>}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="number" defaultValue={item.quantity} className="w-16 text-center border-gray-300 rounded-md" />
                                </div>
                                <p className="font-semibold w-28 text-left">{(item.displayPrice * item.quantity).toLocaleString('fa-IR')} تومان</p>
                                <button className="text-gray-400 hover:text-red-500">
                                    <TrashIcon />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                        <h2 className="text-lg font-semibold text-gray-800 border-b pb-4">خلاصه سفارش</h2>
                        <div className="mt-4 space-y-3 text-gray-600">
                            <div className="flex justify-between">
                                <span>جمع کل محصولات</span>
                                <span className="font-semibold">{subtotal.toLocaleString('fa-IR')} تومان</span>
                            </div>
                            <div className="flex justify-between">
                                <span>مالیات (۹٪)</span>
                                <span className="font-semibold">{tax.toLocaleString('fa-IR')} تومان</span>
                            </div>
                            <div className="flex justify-between font-bold text-gray-800 text-lg pt-4 border-t mt-4">
                                <span>مبلغ قابل پرداخت</span>
                                <span>{total.toLocaleString('fa-IR')} تومان</span>
                            </div>
                        </div>
                        <button onClick={handleSubmit} className="w-full mt-6 bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-colors">
                            ارسال درخواست جهت تایید
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
