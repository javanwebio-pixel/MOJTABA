
import React, { useState } from 'react';
import AdminDashboardSidebar from './AdminDashboardSidebar';
import AdminDashboardHeader from './AdminDashboardHeader';
import CustomerManagement from './admin/pages/CustomerManagement';
import CustomerDetail from './admin/pages/CustomerDetail';
import AddCustomerModal from './admin/pages/AddCustomerModal';
import OrderRequests from './admin/pages/OrderRequests';
import AiPriceImportModal from './admin/pages/AiPriceImportModal';
import { initialOrderRequests } from '../data/initialData';
import SupportTickets from './admin/pages/SupportTickets';
import TicketDetail from './admin/pages/TicketDetail';

export type AdminDashboardPage = 'customer-management' | 'order-requests' | 'support-tickets' | 'reports' | 'settings';

const AdminDashboard = ({ onNavigateHome, customers, setCustomers, customPrices, setCustomPrices, tickets, setTickets }) => {
    const [activePage, setActivePage] = useState<AdminDashboardPage>('customer-management');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isAiModalOpen, setIsAiModalOpen] = useState(false);
    const [orderRequests, setOrderRequests] = useState(initialOrderRequests);

    const handleAddCustomer = (newCustomer) => {
        setCustomers(prev => [...prev, { id: prev.length + 1, ...newCustomer }]);
        setAddModalOpen(false);
    };
    
    const handleApproveRequest = (requestId) => {
        setOrderRequests(prevRequests => 
            prevRequests.map(req => 
                req.id === requestId ? { ...req, status: 'تایید شده' } : req
            )
        );
    };

    const handleAdminReply = (ticketId, replyText) => {
        setTickets(prevTickets =>
            prevTickets.map(ticket =>
                ticket.id === ticketId ? {
                    ...ticket,
                    status: 'پاسخ داده شده',
                    date: new Date().toLocaleDateString('fa-IR'),
                    messages: [...ticket.messages, { sender: 'admin', text: replyText, timestamp: new Date().toLocaleString('fa-IR') }]
                } : ticket
            )
        );
    };

    const handleImportPrices = (newPrices) => {
        const updatedPrices = { ...customPrices };
        for (const customerId in newPrices) {
            updatedPrices[customerId] = {
                ...(updatedPrices[customerId] || {}),
                ...newPrices[customerId],
            };
        }
        setCustomPrices(updatedPrices);
        setIsAiModalOpen(false);
    };

    const renderActivePage = () => {
        if (selectedTicket) {
            return <TicketDetail 
                ticket={selectedTicket} 
                onBack={() => setSelectedTicket(null)}
                onReply={handleAdminReply}
            />;
        }

        if (selectedCustomer) {
            return <CustomerDetail 
                customer={selectedCustomer} 
                onBack={() => setSelectedCustomer(null)}
                customPrices={customPrices[selectedCustomer.id] || {}} 
            />;
        }

        switch (activePage) {
            case 'customer-management':
                return <CustomerManagement 
                            customers={customers}
                            onManageCustomer={setSelectedCustomer} 
                            onAddCustomerClick={() => setAddModalOpen(true)}
                            onAiImportClick={() => setIsAiModalOpen(true)}
                        />;
            case 'order-requests':
                return <OrderRequests requests={orderRequests} onApprove={handleApproveRequest} />;
            case 'support-tickets':
                return <SupportTickets tickets={tickets} onSelectTicket={setSelectedTicket} />;
            default:
                return <CustomerManagement 
                            customers={customers}
                            onManageCustomer={setSelectedCustomer} 
                            onAddCustomerClick={() => setAddModalOpen(true)} 
                            onAiImportClick={() => setIsAiModalOpen(true)}
                        />;
        }
    };

    return (
        <div className="flex min-h-screen bg-[#f5f8fa] text-gray-700 font-poppins" dir="rtl">
            <AdminDashboardSidebar 
                activePage={activePage} 
                onNavigate={(page) => {
                    setSelectedCustomer(null);
                    setSelectedTicket(null);
                    setActivePage(page);
                }}
                isOpen={isSidebarOpen}
                setIsOpen={setSidebarOpen}
            />
            <div className="flex-1 flex flex-col">
                <AdminDashboardHeader onToggleMobileSidebar={() => setSidebarOpen(!isSidebarOpen)} onNavigateHome={onNavigateHome} />
                <main className="p-4 md:p-6 lg:p-8 flex-1 overflow-y-auto">
                    {renderActivePage()}
                </main>
            </div>
            <AddCustomerModal
                isOpen={isAddModalOpen}
                onClose={() => setAddModalOpen(false)}
                onAdd={handleAddCustomer}
            />
            <AiPriceImportModal
                isOpen={isAiModalOpen}
                onClose={() => setIsAiModalOpen(false)}
                customers={customers}
                onImport={handleImportPrices}
            />
        </div>
    );
};

export default AdminDashboard;
