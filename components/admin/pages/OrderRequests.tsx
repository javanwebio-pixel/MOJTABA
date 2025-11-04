import React from 'react';

const getStatusClass = (status) => {
    if (status === 'تایید شده') return 'bg-green-100 text-green-700';
    return 'bg-amber-100 text-amber-700';
};

const OrderRequests = ({ requests, onApprove }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800">درخواست‌های سفارش</h1>
            <p className="mt-1 text-gray-500">سفارشات ارسال شده توسط مشتریان را بررسی و تایید کنید.</p>

            <div className="mt-8 bg-white rounded-lg shadow-sm overflow-x-auto">
                <table className="w-full text-sm text-right text-gray-600">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">نام مشتری</th>
                            <th scope="col" className="px-6 py-3">شرکت</th>
                            <th scope="col" className="px-6 py-3">تاریخ درخواست</th>
                            <th scope="col" className="px-6 py-3">مبلغ کل</th>
                            <th scope="col" className="px-6 py-3">وضعیت</th>
                            <th scope="col" className="px-6 py-3 text-center">عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => (
                            <tr key={request.id} className="bg-white border-b hover:bg-gray-50">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {request.customerName}
                                </th>
                                <td className="px-6 py-4">{request.company}</td>
                                <td className="px-6 py-4">{request.date}</td>
                                <td className="px-6 py-4 font-semibold">{request.total}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getStatusClass(request.status)}`}>
                                        {request.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {request.status === 'در انتظار تایید' ? (
                                        <button
                                            onClick={() => onApprove(request.id)}
                                            className="bg-green-500 text-white font-semibold px-4 py-1.5 rounded-md hover:bg-green-600 text-xs"
                                        >
                                            تایید درخواست
                                        </button>
                                    ) : (
                                        <span className="text-xs text-gray-500">انجام شد</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderRequests;
