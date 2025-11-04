import React from 'react';
import ProductCard from './ProductCard';

const products = [
    {
        title: 'سیستم‌های لوله‌کشی پلی‌پروپیلن (PPR)',
        description: 'سیستم‌های لوله‌کشی با عملکرد بالا برای کاربردهای آب سرد و گرم با مقاومت شیمیایی عالی.',
        imageUrl: 'https://images.unsplash.com/photo-1615598822814-e44274c9e834?q=80&w=600&h=400&auto=format&fit=crop'
    },
    {
        title: 'شیرآلات و اتصالات برنجی',
        description: 'قطعات برنجی با کیفیت برتر که برای دوام و عملکرد قابل اعتماد در محیط‌های دشوار طراحی شده‌اند.',
        imageUrl: ''
    },
    {
        title: 'اتصالات پرسی و افزونه‌ها',
        description: 'سیستم‌های اتصالات پرسی با اتصال سریع برای نصب کارآمد و عملکرد بدون نیاز به نگهداری.',
        imageUrl: 'https://images.unsplash.com/photo-1595233139428-6a2a09527961?q=80&w=600&h=400&auto=format&fit=crop'
    },
    {
        title: 'سیستم‌های لوله‌کشی پلی‌پروپیلن (PP)',
        description: 'راهکارهای لوله‌کشی PP چندمنظوره برای کاربردهای صنعتی با سازگاری شیمیایی برتر.',
        imageUrl: 'https://images.unsplash.com/photo-1581345330985-a7b378612144?q=80&w=600&h=400&auto=format&fit=crop'
    },
    {
        title: 'اتصالات محوری PEX',
        description: 'سیستم‌های اتصال PEX پیشرفته که انعطاف‌پذیری و قابلیت اطمینان را برای تاسیسات مدرن ارائه می‌دهند.',
        imageUrl: ''
    },
    {
        title: 'شیرها و اتصالات',
        description: 'مجموعه کاملی از شیرها، اتصالات و لوازم جانبی برای یکپارچه‌سازی جامع سیستم.',
        imageUrl: 'https://images.unsplash.com/photo-1620706857373-157956361559?q=80&w=600&h=400&auto=format&fit=crop'
    }
];

const Products: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 bg-gray-50">
            <div className="max-w-screen-2xl mx-auto px-12 sm:px-16 lg:px-24">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        محصولات
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        طیف گسترده‌ای از راهکارهای لوله‌کشی صنعتی که برای قابلیت اطمینان و عملکرد طراحی شده‌اند
                    </p>
                </div>

                <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product, index) => (
                        <ProductCard 
                            key={index}
                            title={product.title}
                            description={product.description}
                            imageUrl={product.imageUrl}
                        />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="bg-[#25408f] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#1e3271] transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#25408f] focus:ring-opacity-50">
                        دانلود کاتالوگ
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Products;