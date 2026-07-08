import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { FiShoppingCart, FiSun, FiMoon, FiCoffee } from 'react-icons/fi';

const Header = () => {
  const { cartItems } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "text-primary font-bold border-b-2 border-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary";

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black flex items-center gap-2 text-primary dark:text-amber-500">
          <FiCoffee /> CoffeeSpace
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`py-1 transition-colors ${isActive('/')}`}>Trang Chủ</Link>
          <Link to="/menu" className={`py-1 transition-colors ${isActive('/menu')}`}>Thực Đơn</Link>
          <Link to="/ai-prediction" className={`py-1 transition-colors ${isActive('/ai-prediction')}`}>🤖 AI Dự Đoán</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-cream dark:bg-slate-800 text-secondary dark:text-cream hover:bg-gray-200 transition-colors">
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          
          <Link to="/cart" className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
            <FiShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
