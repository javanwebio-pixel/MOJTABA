
import React, { useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import DashboardOverview from './dashboard/pages/DashboardOverview';
import ProductCatalog from './dashboard/pages/ProductCatalog';
import ShoppingCart from './dashboard/pages/NewOrder'; // Renamed to ShoppingCart
import MyOrders from './dashboard/pages/MyOrders';
import Reports from './dashboard/pages/MyProjects'; // Renamed to Reports
import Invoices from './dashboard/pages/Invoices';
import Profile from './dashboard/pages/Profile';
import Support from './dashboard/pages/Support';

export type DashboardPage = 
    | 'dashboard' 
    | 'catalog' 
    | 'cart' 
    | 'my-orders' 
    | 'reports' 
    | 'invoices' 
    | 'profile' 
    | 'support';

const Dashboard = ({ onNavigateHome, customer, customPrices, tickets, setTickets }: { onNavigateHome: () => void; customer: any; customPrices: any; tickets: any[], setTickets: (tickets: any[]) => void; }) => {
    const [activePage, setActivePage] = useState<DashboardPage>('dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const renderActivePage = () => {
        switch (activePage) {
            case 'dashboard':
                return <DashboardOverview />;
            case 'catalog':
                return <ProductCatalog customPrices={customPrices} />;
            case 'cart':
                return <ShoppingCart customPrices={customPrices} />;
            case 'my-orders':
                return <MyOrders />;
            case 'reports':
                return <Reports />;
            case 'invoices':
                return <Invoices />;
            case 'profile':
                return <Profile />;
            case 'support':
                return <Support tickets={tickets.filter(t => t.customerId === customer.id)} setTickets={setTickets} customer={customer} />;
            default:
                return <DashboardOverview />;
        }
    };

    return (
        <div className="flex min-h-screen bg-[#f5f8fa] text-gray-700 font-poppins" dir="rtl">
            <DashboardSidebar 
                activePage={activePage} 
                onNavigate={setActivePage}
                isOpen={isSidebarOpen}
                setIsOpen={setSidebarOpen}
                customer={customer}
            />
            <div className="flex-1 flex flex-col">
                <DashboardHeader onToggleMobileSidebar={() => setSidebarOpen(!isSidebarOpen)} />
                <main className="p-4 md:p-6 lg:p-8 flex-1 overflow-y-auto">
                    {renderActivePage()}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
