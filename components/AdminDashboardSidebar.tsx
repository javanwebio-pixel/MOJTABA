
import React from 'react';
import { 
    KavirBasparLogo, ProfileIcon, ChartBarIcon, PowerIcon, SettingsIcon, MyOrdersIcon, SupportIcon
} from './dashboard/DashboardIcons';
import { AdminDashboardPage } from './AdminDashboard';
import CloseIcon from './icons/CloseIcon';

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    page: AdminDashboardPage;
    activePage: AdminDashboardPage;
    onNavigate: (page: AdminDashboardPage) => void;
}
const NavItem: React.FC<NavItemProps> = ({ icon, label, page, activePage, onNavigate }) => (
    <button 
        onClick={() => onNavigate(page)}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors text-right ${
        activePage === page ? 'bg-[#5d87ff] text-white shadow' : 'text-gray-600 hover:bg-gray-100'
    }`}>
        {icon}
        <span className="flex-1">{label}</span>
    </button>
);

interface AdminDashboardSidebarProps {
    activePage: AdminDashboardPage;
    onNavigate: (page: AdminDashboardPage) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const SidebarContent: React.FC<{activePage: AdminDashboardPage, onNavigate: (page: AdminDashboardPage) => void}> = ({ activePage, onNavigate}) => (
     <>
        <div className="px-6 py-5 border-b flex items-center justify-between">
            <KavirBasparLogo />
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <div>
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">مدیریت</h3>
                <NavItem icon={<ProfileIcon />} label="مدیریت مشتریان" page="customer-management" activePage={activePage} onNavigate={onNavigate} />
                <NavItem icon={<MyOrdersIcon />} label="درخواست‌های سفارش" page="order-requests" activePage={activePage} onNavigate={onNavigate} />
                <NavItem icon={<SupportIcon />} label="پشتیبانی فنی" page="support-tickets" activePage={activePage} onNavigate={onNavigate} />
                <NavItem icon={<ChartBarIcon />} label="گزارشات" page="reports" activePage={activePage} onNavigate={onNavigate} />
            </div>
             <div>
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">سیستم</h3>
                <NavItem icon={<SettingsIcon />} label="تنظیمات" page="settings" activePage={activePage} onNavigate={onNavigate} />
            </div>
        </nav>
        <div className="p-4 mt-auto">
            <div className="bg-gray-100 p-3 rounded-lg flex items-center gap-3">
                <img src="https://i.pravatar.cc/40?u=admin" alt="Admin Avatar" className="h-10 w-10 rounded-full" />
                <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-800">نام ادمین</p>
                    <p className="text-xs text-gray-500">مدیر سیستم</p>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-200">
                    <PowerIcon />
                </button>
            </div>
        </div>
    </>
);

const AdminDashboardSidebar: React.FC<AdminDashboardSidebarProps> = ({ activePage, onNavigate, isOpen, setIsOpen }) => {
    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="w-64 bg-white border-l border-gray-200 flex-col flex-shrink-0 h-screen sticky top-0 hidden lg:flex">
                <SidebarContent activePage={activePage} onNavigate={onNavigate} />
            </aside>
            
            {/* Mobile Sidebar */}
            <div className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
                <aside className={`relative w-64 bg-white border-l border-gray-200 flex flex-col h-full transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button onClick={() => setIsOpen(false)} className="absolute top-5 left-4 text-gray-500 hover:text-gray-800">
                        <CloseIcon/>
                    </button>
                    <SidebarContent activePage={activePage} onNavigate={page => { onNavigate(page); setIsOpen(false); }} />
                </aside>
            </div>
        </>
    );
};

export default AdminDashboardSidebar;
