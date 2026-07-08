import React, { useState } from 'react';
import { coffeeData } from '../data/coffeeData';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

const Menu = () => {
  const [filter, setFilter] = useState('Tất cả');
  const categories = ['Tất cả', ...new Set(coffeeData.map(p => p.category))];

  const filteredProducts = filter === 'Tất cả' 
    ? coffeeData 
    : coffeeData.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-black mb-2 text-secondary dark:text-cream text-center">Thực Đơn</h1>
      <p className="text-center text-gray-500 mb-10">Chọn món đồ uống yêu thích của bạn</p>
      
      {/* Filters */}
      <div className="flex justify-center space-x-3 mb-10 overflow-x-auto pb-4">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
              filter === cat 
                ? 'bg-primary text-white shadow-md scale-105' 
                : 'bg-cream dark:bg-slate-800 text-secondary dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {filteredProducts.map(product => (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={product.id}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Menu;
