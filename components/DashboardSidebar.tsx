
import React from 'react';
import { 
    KavirBasparLogo, DashboardIcon, CatalogIcon, CartIcon, 
    MyOrdersIcon, ChartBarIcon, InvoiceIcon, ProfileIcon, SupportIcon, PowerIcon 
} from './dashboard/DashboardIcons';
import { DashboardPage } from './Dashboard';
import CloseIcon from './icons/CloseIcon';

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    page: DashboardPage;
    activePage: DashboardPage;
    onNavigate: (page: DashboardPage) => void;
    notification?: number;
}
const NavItem: React.FC<NavItemProps> = ({ icon, label, page, activePage, onNavigate, notification }) => (
    <button 
        onClick={() => onNavigate(page)}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors text-right ${
        activePage === page ? 'bg-[#5d87ff] text-white shadow' : 'text-gray-600 hover:bg-gray-100'
    }`}>
        {icon}
        <span className="flex-1">{label}</span>
        {notification && <span className="bg-cyan-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">{notification}</span>}
    </button>
);

interface DashboardSidebarProps {
    activePage: DashboardPage;
    onNavigate: (page: DashboardPage) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    customer: any;
}

const SidebarContent: React.FC<{activePage: DashboardPage; onNavigate: (page: DashboardPage) => void; customer: any;}> = ({ activePage, onNavigate, customer}) => (
     <>
        <div className="px-6 py-5 border-b flex items-center justify-between">
            <KavirBasparLogo />
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <div>
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">خانه</h3>
                <NavItem icon={<DashboardIcon />} label="داشبورد اصلی" page="dashboard" activePage={activePage} onNavigate={onNavigate} />
                <NavItem icon={<CatalogIcon />} label="کاتالوگ محصولات" page="catalog" activePage={activePage} onNavigate={onNavigate} />
                <NavItem icon={<CartIcon />} label="سبد خرید" page="cart" activePage={activePage} onNavigate={onNavigate} />
            </div>
            <div>
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">مدیریت حساب</h3>
                <NavItem icon={<MyOrdersIcon />} label="سفارشات من" notification={2} page="my-orders" activePage={activePage} onNavigate={onNavigate} />
                <NavItem icon={<ChartBarIcon />} label="گزارشات" page="reports" activePage={activePage} onNavigate={onNavigate} />
                <NavItem icon={<InvoiceIcon />} label="تراکنش‌ها و فاکتورها" page="invoices" activePage={activePage} onNavigate={onNavigate} />
                <NavItem icon={<ProfileIcon />} label="پروفایل کاربری" page="profile" activePage={activePage} onNavigate={onNavigate} />
                <NavItem icon={<SupportIcon />} label="پشتیبانی فنی" page="support" activePage={activePage} onNavigate={onNavigate} />
            </div>
        </nav>
        <div className="p-4 mt-auto">
            <div className="bg-gray-100 p-3 rounded-lg flex items-center gap-3">
                <img src="https://i.pravatar.cc/40?u=customer" alt="Customer Avatar" className="h-10 w-10 rounded-full" />
                <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-800">{customer?.name || 'نام کاربر'}</p>
                    <p className="text-xs text-gray-500">مشتری</p>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-200">
                    <PowerIcon />
                </button>
            </div>
        </div>
    </>
);

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ activePage, onNavigate, isOpen, setIsOpen, customer }) => {
    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="w-64 bg-white border-l border-gray-200 flex-col flex-shrink-0 h-screen sticky top-0 hidden lg:flex">
                <SidebarContent activePage={activePage} onNavigate={onNavigate} customer={customer} />
            </aside>
            
            {/* Mobile Sidebar */}
            <div className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
                <aside className={`relative w-64 bg-white border-l border-gray-200 flex flex-col h-full transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button onClick={() => setIsOpen(false)} className="absolute top-5 left-4 text-gray-500 hover:text-gray-800">
                        <CloseIcon/>
                    </button>
                    <SidebarContent activePage={activePage} onNavigate={page => { onNavigate(page); setIsOpen(false); }} customer={customer} />
                </aside>
            </div>
        </>
    );
};

export default DashboardSidebar;
