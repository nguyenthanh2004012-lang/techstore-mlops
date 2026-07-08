import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCoffee, FiStar, FiClock } from 'react-icons/fi';
import { coffeeData } from '../data/coffeeData';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featured = coffeeData.slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center text-white py-32 relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-cream"
          >
            CoffeeSpace
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-10 max-w-2xl mx-auto text-gray-200"
          >
            Đánh thức ngày mới của bạn với những ly cà phê đậm đà và trà sữa thơm ngon nhất.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/menu" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-colors shadow-lg inline-flex items-center gap-2 border-2 border-primary hover:border-cream">
              <FiCoffee size={20} /> Xem Thực Đơn Ngay
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-20 bg-cream dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary dark:text-cream flex items-center gap-2">
                <FiStar className="text-accent" /> Best Sellers
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Những món nước được yêu thích nhất tại CoffeeSpace</p>
            </div>
            <Link to="/menu" className="text-primary font-bold hover:underline hidden sm:block">Xem Tất Cả &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featured.map(drink => (
              <ProductCard key={drink.id} product={drink} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <FiClock size={48} className="mx-auto text-primary mb-6" />
          <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">Mở cửa mỗi ngày</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Chúng tôi luôn sẵn sàng phục vụ bạn từ <strong>07:00 Sáng</strong> đến <strong>10:00 Tối</strong>. 
            Đến với CoffeeSpace để thưởng thức không gian yên tĩnh và đồ uống tuyệt vời.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
