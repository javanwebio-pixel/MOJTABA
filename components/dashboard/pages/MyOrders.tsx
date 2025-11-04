
import React, { useState } from 'react';
import { EyeIcon, TrackIcon, ReorderIcon, BackIcon } from '../DashboardIcons';

const orders = [
    { id: 'KB-95784', date: '۱۴۰۳/۰۴/۲۵', total: '۱۲,۵۰۰,۰۰۰ تومان', status: 'تحویل شده', statusColor: 'green' },
    { id: 'KB-95780', date: '۱۴۰۳/۰۴/۲۲', total: '۸,۲۰۰,۰۰۰ تومان', status: 'در حال ارسال', statusColor: 'blue' },
    { id: 'KB-95775', date: '۱۴۰۳/۰۴/۲۰', total: '۳۱,۰۰۰,۰۰۰ تومان', status: 'در حال پردازش', statusColor: 'amber' },
    { id: 'KB-95771', date: '۱۴۰۳/۰۴/۱۸', total: '۴,۸۵۰,۰۰۰ تومان', status: 'لغو شده', statusColor: 'red' },
    { id: 'KB-95765', date: '۱۴۰۳/۰۴/۱۲', total: '۱۶,۳۰۰,۰۰۰ تومان', status: 'تحویل شده', statusColor: 'green' },
];

const getStatusClass = (statusColor) => {
    switch (statusColor) {
        case 'green': return 'bg-green-100 text-green-700';
        case 'blue': return 'bg-blue-100 text-blue-700';
        case 'amber': return 'bg-amber-100 text-amber-700';
        case 'red': return 'bg-red-100 text-red-700';
        default: return 'bg-gray-100 text-gray-700';
    }
};

const OrderDetailView = ({ order, onBack }) => {
    const products = [
        { name: 'لوله تک لایه PPR سایز ۲۰', qty: 10, price: '۴,۵۰۰,۰۰۰' },
        { name: 'شیر فلکه', qty: 5, price: '۷,۵۰۰,۰۰۰' },
        { name: 'زانویی ۹۰ درجه', qty: 50, price: '۵۰۰,۰۰۰' },
    ];
    return (
        <div>
            <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black mb-6">
                <BackIcon />
                بازگشت به لیست سفارشات
            </button>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start border-b pb-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">جزئیات سفارش {order.id}</h2>
                        <p className="text-sm text-gray-500">ثبت شده در {order.date}</p>
                    </div>
                    <span className={`px-3 py-1.5 text-sm font-semibold rounded-full ${getStatusClass(order.statusColor)}`}>{order.status}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h3 className="font-semibold text-gray-700">آدرس تحویل</h3>
                        <p className="text-sm text-gray-600 mt-2">تهران، خیابان ولیعصر، برج سرو، واحد ۱۰۱</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-700">اطلاعات پرداخت</h3>
                        <p className="text-sm text-gray-600 mt-2">پرداخت از طریق اعتبار حساب</p>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="font-semibold text-gray-700 mb-4">محصولات سفارش</h3>
                    <div className="space-y-4">
                        {products.map(p => (
                            <div key={p.name} className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                                <div>
                                    <p className="font-medium text-gray-800">{p.name}</p>
                                    <p className="text-sm text-gray-500">تعداد: {p.qty}</p>
                                </div>
                                <p className="font-semibold text-gray-700">{p.price} تومان</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6 pt-6 border-t flex justify-end">
                    <div className="w-full max-w-sm space-y-3">
                        <div className="flex justify-between text-gray-600"><span>جمع کل:</span><span>۱۱,۴۶۷,۸۹۰ تومان</span></div>
                        <div className="flex justify-between text-gray-600"><span>مالیات (۹٪):</span><span>۱,۰۳۲,۱۱۰ تومان</span></div>
                        <div className="flex justify-between font-bold text-lg text-gray-800"><span>مبلغ نهایی:</span><span>{order.total}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MyOrders = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);

    if (selectedOrder) {
        return <OrderDetailView order={selectedOrder} onBack={() => setSelectedOrder(null)} />;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800">سفارشات من</h1>
            <p className="mt-1 text-gray-500">تاریخچه سفارشات خود را مشاهده و مدیریت کنید.</p>

            <div className="mt-8 bg-white rounded-lg shadow-sm overflow-x-auto">
                <table className="w-full text-sm text-right text-gray-600">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">شماره سفارش</th>
                            <th scope="col" className="px-6 py-3">تاریخ</th>
                            <th scope="col" className="px-6 py-3">مبلغ کل</th>
                            <th scope="col" className="px-6 py-3">وضعیت</th>
                            <th scope="col" className="px-6 py-3 text-center">عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="bg-white border-b hover:bg-gray-50">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {order.id}
                                </th>
                                <td className="px-6 py-4">{order.date}</td>
                                <td className="px-6 py-4 font-semibold">{order.total}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getStatusClass(order.statusColor)}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <button onClick={() => setSelectedOrder(order)} className="p-2 text-gray-500 hover:bg-gray-200 rounded-full" title="مشاهده جزئیات"><EyeIcon /></button>
                                        <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-full" title="پیگیری ارسال"><TrackIcon /></button>
                                        <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-full" title="سفارش مجدد"><ReorderIcon /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                <span>نمایش ۱ تا ۵ از ۵ نتیجه</span>
                <div className="flex gap-1">
                    <button className="px-3 py-1 border rounded-md hover:bg-gray-100">قبلی</button>
                    <button className="px-3 py-1 border rounded-md bg-[#5d87ff] text-white">۱</button>
                    <button className="px-3 py-1 border rounded-md hover:bg-gray-100">بعدی</button>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
