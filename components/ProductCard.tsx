import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';
import PlaceholderIcon from './icons/PlaceholderIcon';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative w-full h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <PlaceholderIcon />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
        <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-[#25408f] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
          بیشتر بدانید
          <div className="transition-transform duration-300 group-hover:-translate-x-0.5">
            <ArrowRightIcon />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;