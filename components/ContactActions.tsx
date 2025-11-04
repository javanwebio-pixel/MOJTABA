import React from 'react';
import SelectInput from './SelectInput';

const ContactActions: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="relative bg-cover bg-center rounded-2xl shadow-2xl p-8 sm:p-12 lg:p-16 text-white overflow-hidden"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554992309-58b41a0b387c?q=80&w=2670&auto=format&fit=crop')" }}
                >
                    <div className="absolute inset-0 bg-slate-800/70 backdrop-blur-sm"></div>
                    <div className="relative grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                                نقطه فروش را پیدا کنید
                            </h2>
                            <form className="space-y-4">
                                <SelectInput>
                                    <option className="bg-gray-800 text-white">کشور</option>
                                    <option className="bg-gray-800 text-white">ایران</option>
                                    <option className="bg-gray-800 text-white">آلمان</option>
                                    <option className="bg-gray-800 text-white">کانادا</option>
                                </SelectInput>
                                <SelectInput>
                                    <option className="bg-gray-800 text-white">شهر</option>
                                    <option className="bg-gray-800 text-white">تهران</option>
                                    <option className="bg-gray-800 text-white">برلین</option>
                                    <option className="bg-gray-800 text-white">تورنتو</option>
                                </SelectInput>
                                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                    <button type="submit" className="flex-1 bg-[#25408f] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1e3271] transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-[#25408f] focus:ring-opacity-75">
                                        جستجو
                                    </button>
                                    <button type="button" className="flex-1 bg-transparent text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors border border-white/50">
                                        نقشه
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                        <div className="hidden md:block absolute left-1/2 top-1/4 h-1/2 w-px bg-white/20 -translate-x-1/2"></div>

                        <div className="space-y-6 md:pr-12 lg:pr-16">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                                شریک ما شوید
                            </h2>
                            <p className="text-gray-200 leading-relaxed text-base">
                                اگر می‌خواهید شریک تجاری ما باشید، لطفاً فرم را پر کنید و ما در اسرع وقت با شما تماس گرفته و آنچه را که می‌توانیم با هم انجام دهیم ارزیابی خواهیم کرد.
                            </p>
                            <div className="pt-2">
                                <button type="button" className="w-full sm:w-auto sm:px-12 bg-transparent text-white font-semibold py-3 rounded-lg hover:bg-white/10 transition-colors border border-white/50">
                                    ایجاد فرم
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactActions;