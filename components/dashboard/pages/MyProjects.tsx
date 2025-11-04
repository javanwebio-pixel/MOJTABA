
import React from 'react';

const purchaseData = [
    { month: 'فروردین', amount: 35 }, { month: 'اردیبهشت', amount: 50 }, { month: 'خرداد', amount: 80 },
    { month: 'تیر', amount: 65 }, { month: 'مرداد', amount: 90 }, { month: 'شهریور', amount: 75 }
];

const topProducts = [
    { name: 'لوله تک لایه PPR سایز ۲۰', code: 'KB-101-20', count: 1520 },
    { name: 'زانویی ۹۰ درجه', code: 'KB-A201', count: 3200 },
    { name: 'شیر فلکه', code: 'KB-V401', count: 450 },
    { name: 'بوشن', code: 'KB-A205', count: 2500 },
    { name: 'لوله سه لایه فایبرگلاس ۲۵', code: 'KB-301-25', count: 1100 },
];

const Reports = () => {
    const maxAmount = Math.max(...purchaseData.map(d => d.amount));

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800">گزارشات خرید</h1>
            <p className="mt-1 text-gray-500">تحلیل و بررسی تاریخچه خرید شما.</p>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">نمودار خرید ۶ ماه اخیر (میلیون تومان)</h2>
                <div className="mt-6 h-72 flex justify-between items-end gap-4 border-b border-gray-200 pb-4">
                    {purchaseData.map(data => (
                        <div key={data.month} className="flex-1 flex flex-col items-center justify-end h-full">
                             <div 
                                className="w-1/2 bg-blue-500 rounded-t-md transition-all duration-500"
                                style={{ height: `${(data.amount / maxAmount) * 100}%` }}
                            ></div>
                            <span className="text-xs text-gray-500 mt-2">{data.month}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">محصولات با بیشترین تکرار خرید</h2>
                <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-sm text-right text-gray-600">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">نام محصول</th>
                                <th scope="col" className="px-6 py-3">کد محصول</th>
                                <th scope="col" className="px-6 py-3">تعداد خرید (سال اخیر)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topProducts.sort((a,b) => b.count - a.count).map(product => (
                                <tr key={product.code} className="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {product.name}
                                    </th>
                                    <td className="px-6 py-4">{product.code}</td>
                                    <td className="px-6 py-4 font-semibold">{product.count.toLocaleString('fa-IR')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Reports;
