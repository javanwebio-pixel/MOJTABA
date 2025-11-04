
import React, { useState, useMemo } from 'react';
import SearchIcon from '../../icons/SearchIcon';
import { FilterIcon, PlusIcon } from '../DashboardIcons';
import PlaceholderIcon from '../../icons/PlaceholderIcon';
import { allProducts } from '../../../data/initialData';

const categories = ['همه', ...Array.from(new Set(allProducts.map(p => p.category)))];

const ProductCard: React.FC<{ product: typeof allProducts[0], customPrice?: string }> = ({ product, customPrice }) => {
    const isAvailable = product.stock !== 'ناموجود';
    const displayPrice = customPrice || product.price;

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
            <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
                {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300" />
                ) : (
                    <PlaceholderIcon />
                )}
                <span className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full ${
                    product.stock === 'موجود' ? 'bg-green-100 text-green-700' : product.stock === 'تعداد محدود' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                }`}>{product.stock}</span>
                 {customPrice && <span className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full bg-green-500 text-white">ویژه</span>}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-800 flex-grow">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1">کد: {product.code}</p>
                <p className="text-lg font-bold text-gray-900 mt-2">{displayPrice} <span className="text-sm font-normal">تومان</span></p>
                <button 
                    disabled={!isAvailable}
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-[#5d87ff] text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm disabled:bg-gray-300 disabled:cursor-not-allowed">
                    <PlusIcon />
                    افزودن به سبد
                </button>
            </div>
        </div>
    );
};


const ProductCatalog = ({ customPrices }: { customPrices: { [productCode: string]: string } }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('همه');

    const filteredProducts = useMemo(() => {
        return allProducts.filter(product => {
            const matchesCategory = activeCategory === 'همه' || product.category === activeCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.code.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, activeCategory]);

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800">کاتالوگ محصولات</h1>
            <p className="mt-1 text-gray-500">محصولات مورد نظر خود را جستجو و مشاهده کنید.</p>
            
            <div className="mt-6 bg-white p-4 rounded-lg shadow-sm flex flex-col sm:flex-row gap-4 items-center">
                <div className="relative w-full sm:flex-grow">
                    <input 
                        type="text" 
                        placeholder="جستجو بر اساس نام یا کد محصول..." 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pr-10 pl-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                        <SearchIcon />
                    </div>
                </div>
                <div className="relative w-full sm:w-auto">
                    <select 
                        className="appearance-none w-full sm:w-48 bg-gray-50 border border-gray-200 rounded-lg py-2 pr-10 pl-4 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                        value={activeCategory}
                        onChange={(e) => setActiveCategory(e.target.value)}
                    >
                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                     <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                        <FilterIcon />
                    </div>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredProducts.map((product, index) => (
                    <ProductCard 
                        key={index} 
                        product={product}
                        customPrice={customPrices?.[product.code]}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductCatalog;
