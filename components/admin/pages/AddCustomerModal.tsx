import React, { useState } from 'react';
import { PlusIcon } from '../../dashboard/DashboardIcons';
import CloseIcon from '../../icons/CloseIcon';

const AddCustomerModal = ({ isOpen, onClose, onAdd }) => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('فعال');
    const [statusColor, setStatusColor] = useState('green');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ name, company, email, phone, status, statusColor });
        // Reset form
        setName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setStatus('فعال');
        setStatusColor('green');
    };

    const handleStatusChange = (e) => {
        const selectedStatus = e.target.value;
        setStatus(selectedStatus);
        switch (selectedStatus) {
            case 'فعال':
                setStatusColor('green');
                break;
            case 'غیرفعال':
                setStatusColor('red');
                break;
            case 'در انتظار تایید':
                setStatusColor('amber');
                break;
            default:
                setStatusColor('gray');
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 border-b flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">افزودن مشتری جدید</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800">
                        <CloseIcon />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">نام مشتری</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-white border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">شرکت</label>
                        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required className="w-full bg-white border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">شماره موبایل</label>
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full bg-white border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ایمیل</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-white border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">وضعیت</label>
                        <select value={status} onChange={handleStatusChange} className="w-full bg-white border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>فعال</option>
                            <option>غیرفعال</option>
                            <option>در انتظار تایید</option>
                        </select>
                    </div>
                    <div className="pt-4 flex justify-end gap-3">
                        <button type="button" onClick={onClose} className="bg-gray-100 text-gray-700 font-semibold px-5 py-2 rounded-lg hover:bg-gray-200">
                            انصراف
                        </button>
                        <button type="submit" className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
                            <PlusIcon />
                            افزودن
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCustomerModal;
