import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">TechStore</h3>
          <p className="text-sm">Your ultimate destination for modern, high-quality electronics.</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-primary transition-colors">Shop</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
            <li><Link to="/returns" className="hover:text-primary transition-colors">Returns</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Subscribe for latest updates.</p>
          <div className="flex">
            <input type="email" placeholder="Email address" className="px-3 py-2 bg-slate-800 text-white rounded-l-xl focus:outline-none w-full" />
            <button className="bg-primary px-4 py-2 rounded-r-xl text-white hover:bg-blue-700 transition-colors">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-sm">
        &copy; {new Date().getFullYear()} TechStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
