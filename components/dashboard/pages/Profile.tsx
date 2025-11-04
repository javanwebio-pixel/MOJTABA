
import React, { useState } from 'react';
import { EditIcon, PlusIcon } from '../DashboardIcons';

const FormSection: React.FC<{
    title: string;
    isEditing: boolean;
    onEditToggle: () => void;
    children: React.ReactNode;
    onSave: () => void;
}> = ({ title, isEditing, onEditToggle, children, onSave }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            {!isEditing && (
                <button onClick={onEditToggle} className="text-sm text-blue-600 font-semibold flex items-center gap-1">
                    <EditIcon />
                    ویرایش
                </button>
            )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {children}
        </div>
        {isEditing && (
            <div className="mt-6 flex gap-4">
                <button onClick={onSave} className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600">ذخیره تغییرات</button>
                <button onClick={onEditToggle} className="bg-gray-100 text-gray-700 font-semibold px-6 py-2 rounded-lg hover:bg-gray-200">انصراف</button>
            </div>
        )}
    </div>
);

const FormField = ({ label, value, isEditing, type = "text" }) => (
    <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
        <input 
            type={type} 
            defaultValue={value}
            readOnly={!isEditing}
            className={`w-full bg-gray-50 border border-gray-200 rounded-lg py-2 px-3 text-gray-700 ${!isEditing ? 'cursor-not-allowed' : 'focus:ring-2 focus:ring-blue-500'}`}
        />
    </div>
);

const Profile = () => {
    const [editingSection, setEditingSection] = useState(null);

    const handleEditToggle = (section) => {
        setEditingSection(editingSection === section ? null : section);
    };

    const handleSave = (section) => {
        // Here you would handle the save logic
        console.log(`Saving ${section}...`);
        setEditingSection(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800">پروفایل کاربری</h1>
            <p className="mt-1 text-gray-500">اطلاعات حساب کاربری و شرکت خود را مدیریت کنید.</p>

            <div className="mt-8 flex flex-col items-center">
                 <img src="https://i.pravatar.cc/100?u=customer" alt="User Avatar" className="h-24 w-24 rounded-full" />
                 <h2 className="mt-4 text-xl font-bold text-gray-800">شرکت ساختمانی آرمان</h2>
                 <p className="text-gray-500">مشتری حقوقی</p>
            </div>

            <div className="mt-8 space-y-8">
                <FormSection title="اطلاعات شخصی" isEditing={editingSection === 'personal'} onEditToggle={() => handleEditToggle('personal')} onSave={() => handleSave('personal')}>
                    <FormField label="نام و نام خانوادگی" value="آقای محمدی" isEditing={editingSection === 'personal'} />
                    <FormField label="کد ملی" value="۰۰۱۲۳۴۵۶۷۸" isEditing={editingSection === 'personal'} />
                    <FormField label="شماره موبایل" value="۰۹۱۲۳۴۵۶۷۸۹" isEditing={editingSection === 'personal'} />
                    <FormField label="پست الکترونیک" value="info@arman-co.ir" isEditing={editingSection === 'personal'} />
                </FormSection>

                <FormSection title="اطلاعات شرکت" isEditing={editingSection === 'company'} onEditToggle={() => handleEditToggle('company')} onSave={() => handleSave('company')}>
                    <FormField label="نام شرکت" value="شرکت ساختمانی آرمان" isEditing={editingSection === 'company'} />
                    <FormField label="شناسه ملی" value="۱۰۱۰۱۲۳۴۵۶۷" isEditing={editingSection === 'company'} />
                    <FormField label="شماره ثبت" value="۱۲۳۴۵۶" isEditing={editingSection === 'company'} />
                    <FormField label="کد اقتصادی" value="۴۱۱۱۲۳۴۵۶۷۸۹" isEditing={editingSection === 'company'} />
                </FormSection>

                 <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center border-b pb-4 mb-6">
                        <h2 className="text-lg font-semibold text-gray-800">آدرس‌ها</h2>
                        <button className="text-sm text-blue-600 font-semibold flex items-center gap-1"><PlusIcon /> افزودن آدرس جدید</button>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                            <div className="flex justify-between items-center">
                                <p className="font-semibold">آدرس اصلی (پیش‌فرض)</p>
                                <button className="text-xs text-gray-500 hover:text-blue-600">ویرایش</button>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">تهران، خیابان ولیعصر، بالاتر از پارک ساعی، برج سرو، طبقه ۱۰، واحد ۱۰۱</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                             <div className="flex justify-between items-center">
                                <p className="font-semibold">انبار مرکزی</p>
                                <button className="text-xs text-gray-500 hover:text-blue-600">ویرایش</button>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">جاده قدیم کرج، شهرک صنعتی، انبار شماره ۵</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">تنظیمات امنیتی</h2>
                    <button className="bg-gray-100 text-gray-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-200 transition-colors">
                        تغییر رمز عبور
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;