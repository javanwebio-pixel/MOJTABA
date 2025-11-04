
import React from 'react';
import { BellIcon, MoonIcon, CartIcon } from './dashboard/DashboardIcons';
import MenuIcon from './icons/MenuIcon';
import SearchIcon from './icons/SearchIcon';


const DashboardHeader: React.FC<{ onToggleMobileSidebar: () => void }> = ({ onToggleMobileSidebar }) => {
    return (
        <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-10 p-4 lg:px-8 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
                 <button className="lg:hidden p-2 -mr-2 text-gray-600" onClick={onToggleMobileSidebar}>
                    <MenuIcon />
                </button>
                 <button className="hidden lg:block p-2 rounded-full hover:bg-gray-100">
                    <SearchIcon />
                </button>
                 <a href="#" className="hidden md:block text-sm font-medium text-gray-600 hover:text-blue-600">راهنمای نصب</a>
                <a href="#" className="hidden md:block text-sm font-medium text-gray-600 hover:text-blue-600">دانلود کاتالوگ</a>
                <a href="#" className="hidden md:block text-sm font-medium text-gray-600 hover:text-blue-600">سوالات متداول</a>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
                <button className="p-2 rounded-full hover:bg-gray-100 relative">
                    <BellIcon />
                    <span className="absolute top-1 left-1 block h-2 w-2 rounded-full bg-blue-500"></span>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <MoonIcon />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 relative">
                    <CartIcon />
                     <span className="absolute -top-1 -left-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-xs">۳</span>
                </button>
                 <button className="p-2 rounded-full hover:bg-gray-100">
                    <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ir.svg" alt="language flag" className="h-5 w-5 rounded-sm" />
                </button>
                <button>
                    <img src="https://i.pravatar.cc/40?u=customer" alt="User Avatar" className="h-9 w-9 rounded-full" />
                </button>
            </div>
        </header>
    );
};

export default DashboardHeader;
