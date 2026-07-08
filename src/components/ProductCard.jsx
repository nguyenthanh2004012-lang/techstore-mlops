import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-black/50 backdrop-blur rounded-full text-gray-500 hover:text-red-500 transition-colors">
          <FiHeart />
        </button>
      </div>
      
      <div className="flex flex-col flex-grow">
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase mb-1">{product.category}</span>
        <Link to={`/product/${product.id}`} className="font-semibold text-lg mb-2 hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </Link>
        
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 text-sm">
            {'★'.repeat(Math.floor(product.rating))}
            <span className="text-gray-300">{'★'.repeat(5 - Math.floor(product.rating))}</span>
          </div>
          <span className="text-xs text-gray-500 ml-2">({product.rating})</span>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          
          <button 
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            className={`p-2 rounded-full flex items-center justify-center transition-colors ${
              product.stock > 0 
                ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700'
            }`}
          >
            <FiShoppingCart />
          </button>
        </div>
        {product.stock === 0 && (
          <span className="text-xs text-red-500 mt-2 font-medium">Out of stock</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
