import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <FiShoppingBag size={80} className="mx-auto text-gray-300 mb-6" />
        <h2 className="text-3xl font-bold mb-4 text-secondary dark:text-cream">Giỏ hàng trống</h2>
        <p className="text-gray-500 mb-8">Bạn chưa chọn món nước nào. Hãy xem qua thực đơn của chúng tôi nhé!</p>
        <Link to="/menu" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary transition-colors inline-block">
          Xem Thực Đơn
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-secondary dark:text-cream">Giỏ hàng của bạn</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-center gap-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
              <div className="flex-grow text-center sm:text-left">
                <h3 className="font-bold text-lg text-secondary dark:text-white">{item.name}</h3>
                <p className="text-primary font-medium">{item.price.toLocaleString()}đ</p>
              </div>
              
              <div className="flex items-center space-x-3 bg-cream dark:bg-slate-700 rounded-full px-3 py-1">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:text-primary dark:text-gray-300 font-bold">
                  <FiMinus size={16} />
                </button>
                <span className="font-bold w-6 text-center text-secondary dark:text-white">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-primary dark:text-gray-300 font-bold">
                  <FiPlus size={16} />
                </button>
              </div>

              <div className="font-bold text-lg w-28 text-right text-secondary dark:text-white">
                {(item.price * item.quantity).toLocaleString()}đ
              </div>

              <button 
                onClick={() => removeFromCart(item.id)}
                className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
              >
                <FiTrash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 sticky top-24">
            <h2 className="text-xl font-bold mb-6 text-secondary dark:text-cream">Tóm tắt đơn hàng</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-6 border-b border-gray-200 dark:border-gray-700 pb-6">
              <div className="flex justify-between">
                <span>Tạm tính</span>
                <span className="font-medium">{cartTotal.toLocaleString()}đ</span>
              </div>
              <div className="flex justify-between">
                <span>Phí giao hàng</span>
                <span className="font-medium">15,000đ</span>
              </div>
              <div className="flex justify-between font-black text-xl text-primary dark:text-amber-500 pt-4 border-t border-gray-200 dark:border-gray-700">
                <span>Tổng cộng</span>
                <span>{(cartTotal + 15000).toLocaleString()}đ</span>
              </div>
            </div>
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-secondary transition-colors shadow-md">
              Tiến hành Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
