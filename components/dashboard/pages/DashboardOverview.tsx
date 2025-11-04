
import React from 'react';
import { 
    ProcessingIcon, TotalAmountIcon, MegaphoneIcon, UnpaidInvoicesIcon, SupportTicketIcon, WalletIcon,
    UpArrowIcon, DownArrowIcon, EyeIcon
} from '../DashboardIcons';

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    bgColor: string;
}
const StatCard: React.FC<StatCardProps> = ({ icon, title, value, bgColor }) => (
    <div className={`p-5 rounded-lg shadow-sm flex items-start justify-between ${bgColor}`}>
        <div>
            <h3 className="text-gray-600 font-medium">{title}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
        </div>
        <div className="p-3 rounded-md bg-white">
            {icon}
        </div>
    </div>
);

const RevenueUpdatesCard = () => {
    const chartData = [
        { label: 'تک لایه', paid: 40, due: 20 },
        { label: 'سه لایه', paid: 20, due: 10 },
        { label: 'اتصالات', paid: 60, due: 25 },
        { label: 'شیرآلات', paid: 45, due: 20 },
        { label: 'پلیمر', paid: 80, due: 30 },
        { label: 'ابزار', paid: 35, due: 15 },
    ];
    
    return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="font-semibold text-lg text-gray-800">تحلیل سفارشات و فاکتورها</h3>
                <p className="text-sm text-gray-500">نمای کلی فاکتورها</p>
            </div>
            <select className="border-none text-gray-500 text-sm focus:ring-0 bg-transparent">
                <option>اسفند ۱۴۰۳</option>
                <option>فروردین ۱۴۰۴</option>
            </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-1 space-y-6">
                <div>
                    <p className="text-3xl font-bold">۲۵۰ میلیون تومان</p>
                    <p className="text-sm text-gray-500">مجموع فاکتورها</p>
                </div>
                <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500"></span>فاکتورهای پرداخت شده</div>
                    <p className="text-lg font-semibold pr-4">۲۱۰ میلیون تومان</p>
                </div>
                 <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-300"></span>بدهی جاری</div>
                    <p className="text-lg font-semibold pr-4">۴۰ میلیون تومان</p>
                </div>
                 <button className="w-full bg-[#5d87ff] text-white py-2.5 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                    مشاهده گزارش کامل
                </button>
            </div>
            <div className="md:col-span-2 flex flex-col items-end h-64">
                <div className="w-full h-full flex justify-between items-end gap-2">
                    {chartData.map((bar, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end items-center h-full">
                            <div style={{height: `${bar.paid}%`}} className="w-4/5 bg-blue-500 rounded-t-md"></div>
                            <div style={{height: `${bar.due}%`}} className="w-4/5 bg-cyan-300"></div>
                        </div>
                    ))}
                </div>
                <div className="w-full flex justify-between items-center gap-2 mt-2 text-xs text-gray-500">
                    {chartData.map((bar, i) => (
                        <span key={i} className="flex-1 text-center">{bar.label}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
};

const RecentOrders = () => {
    const orders = [
        { id: 'KB-95784', date: '۱۴۰۳/۰۴/۲۵', total: '۱۲,۵۰۰,۰۰۰', status: 'تحویل شده', statusColor: 'green' },
        { id: 'KB-95780', date: '۱۴۰۳/۰۴/۲۲', total: '۸,۲۰۰,۰۰۰', status: 'در حال ارسال', statusColor: 'blue' },
        { id: 'KB-95775', date: '۱۴۰۳/۰۴/۲۰', total: '۳۱,۰۰۰,۰۰۰', status: 'در حال پردازش', statusColor: 'amber' },
    ];
    const getStatusClass = (statusColor) => {
        if (statusColor === 'green') return 'bg-green-100 text-green-700';
        if (statusColor === 'blue') return 'bg-blue-100 text-blue-700';
        return 'bg-amber-100 text-amber-700';
    };
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800">آخرین سفارشات</h3>
            <div className="mt-4 flow-root">
                <div className="-mx-6 -my-2 overflow-x-auto">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">شماره سفارش</th>
                                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">وضعیت</th>
                                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">مبلغ (تومان)</th>
                                    <th scope="col" className="relative py-3.5 pl-4 sm:pl-0"><span className="sr-only">مشاهده</span></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {orders.map(order => (
                                    <tr key={order.id}>
                                        <td className="whitespace-nowrap py-4 pr-4 text-sm font-medium text-gray-900 sm:pr-0">{order.id}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(order.statusColor)}`}>{order.status}</span>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-700">{order.total}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-4 text-center text-sm font-medium sm:pl-0">
                                            <button className="p-1 text-gray-500 hover:text-blue-600"><EyeIcon/></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SpecialOffers = () => {
    const offers = [
        { name: 'لوله سه لایه فایبرگلاس', discount: '۱۵٪ تخفیف', imageUrl: 'https://kavirbaspar.com/wp-content/uploads/2022/02/3layeh.jpg' },
        { name: 'شیر فلکه', discount: 'خرید ۱۰ عدد، ۱ عدد رایگان', imageUrl: 'https://kavirbaspar.com/wp-content/uploads/2022/03/%D8%B4%DB%8C%D8%B1-%D9%81%D9%84%DA%A9%D9%87-1-1.jpg' }
    ];
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800">پیشنهادات ویژه</h3>
            <div className="mt-4 space-y-4">
                {offers.map(offer => (
                    <div key={offer.name} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                        <img src={offer.imageUrl} alt={offer.name} className="h-14 w-14 object-contain rounded-md bg-white p-1" />
                        <div className="flex-1">
                            <p className="font-semibold text-gray-800 text-sm">{offer.name}</p>
                            <p className="text-xs text-green-600 font-bold">{offer.discount}</p>
                        </div>
                        <button className="text-sm text-blue-600 font-semibold hover:underline">خرید</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

const DashboardOverview = () => {
    const statCards = [
        { icon: <ProcessingIcon />, title: "سفارشات در حال پردازش", value: "۱۲", bgColor: "bg-blue-100" },
        { icon: <TotalAmountIcon />, title: "سفارشات ماه جاری", value: "۱۲۰ میلیون", bgColor: "bg-cyan-100" },
        { icon: <MegaphoneIcon />, title: "اطلاعیه‌ها", value: "۳ جدید", bgColor: "bg-amber-100" },
        { icon: <UnpaidInvoicesIcon />, title: "فاکتورهای پرداخت نشده", value: "۲", bgColor: "bg-rose-100" },
        { icon: <SupportTicketIcon />, title: "تیکت‌های پشتیبانی", value: "۱ باز", bgColor: "bg-orange-100" },
        { icon: <WalletIcon />, title: "اعتبار حساب", value: "۲۵ میلیون", bgColor: "bg-purple-100" },
    ];

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {statCards.map(card => <StatCard key={card.title} {...card} />)}
            </div>
            <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2">
                    <RevenueUpdatesCard />
                </div>
                <div className="xl:col-span-1 flex flex-col gap-8">
                   <RecentOrders />
                   <SpecialOffers />
                </div>
            </div>
        </>
    );
};

export default DashboardOverview;
