
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IndustrialSolutions from './components/IndustrialSolutions';
import Products from './components/Products';
import Strengths from './components/Strengths';
import Industries from './components/Industries';
import ContactActions from './components/ContactActions';
import Footer from './components/Footer';
import Partnership from './components/Partnership';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import { initialCustomers, initialTickets } from './data/initialData';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'dashboard' | 'admin_dashboard'>('home');
  const [customers, setCustomers] = useState(initialCustomers);
  const [customPrices, setCustomPrices] = useState<{ [customerId: number]: { [productCode: string]: string } }>({});
  const [tickets, setTickets] = useState(initialTickets);

  const navigate = (targetView: 'home' | 'dashboard' | 'admin_dashboard') => {
    setView(targetView);
  };
  
  // شبیه‌سازی مشتری وارد شده برای داشبورد مشتری
  const loggedInCustomer = customers[0];
  const customerSpecificPrices = customPrices[loggedInCustomer?.id] || {};


  if (view === 'dashboard') {
    return <Dashboard 
      onNavigateHome={() => navigate('home')}
      customer={loggedInCustomer}
      customPrices={customerSpecificPrices}
      tickets={tickets}
      setTickets={setTickets}
    />;
  }

  if (view === 'admin_dashboard') {
    return <AdminDashboard 
      onNavigateHome={() => navigate('home')}
      customers={customers}
      setCustomers={setCustomers}
      customPrices={customPrices}
      setCustomPrices={setCustomPrices}
      tickets={tickets}
      setTickets={setTickets}
    />;
  }


  return (
    <div className="bg-gray-50 font-sans">
      <div className="relative w-full h-screen text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2400&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col">
          <Header onNavigateToDashboard={() => navigate('dashboard')} />
          <main className="flex-grow">
            <Hero />
          </main>
        </div>
      </div>
      <IndustrialSolutions />
      <Products />
      <Strengths />
      <Partnership />
      <Industries />
      <ContactActions />
      <Footer onNavigateToAdminDashboard={() => navigate('admin_dashboard')} />
    </div>
  );
};

export default App;
