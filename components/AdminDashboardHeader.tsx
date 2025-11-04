import React from 'react';
import { BellIcon, MoonIcon } from './dashboard/DashboardIcons';
import MenuIcon from './icons/MenuIcon';
import SearchIcon from './icons/SearchIcon';

const AdminDashboardHeader: React.FC<{ onToggleMobileSidebar: () => void; onNavigateHome: () => void; }> = ({ onToggleMobileSidebar, onNavigateHome }) => {
    return (
        <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-10 p-4 lg:px-8 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
                 <button className="lg:hidden p-2 -mr-2 text-gray-600" onClick={onToggleMobileSidebar}>
                    <MenuIcon />
                </button>
                 <button className="hidden lg:block p-2 rounded-full hover:bg-gray-100">
                    <SearchIcon />
                </button>
                 <button onClick={onNavigateHome} className="hidden md:block text-sm font-medium text-gray-600 hover:text-blue-600">بازگشت به سایت</button>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
                <button className="p-2 rounded-full hover:bg-gray-100 relative">
                    <BellIcon />
                    <span className="absolute top-1 left-1 block h-2 w-2 rounded-full bg-blue-500"></span>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <MoonIcon />
                </button>
                <button>
                    <img src="https://i.pravatar.cc/40?u=admin" alt="Admin Avatar" className="h-9 w-9 rounded-full" />
                </button>
            </div>
        </header>
    );
};

export default AdminDashboardHeader;
