import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend, FiCoffee } from 'react-icons/fi';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Chào mừng bạn đến với CoffeeSpace! 👋 Mình là Barista Ảo. Bạn muốn dùng Cà phê hay Trà sữa hôm nay?', sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, newMsg]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { id: Date.now() + 1, text: 'Món này bên mình rất ngon! Đợi mình lấy menu cho bạn nhé. ☕ (Tính năng đang được giả lập, sau này mình sẽ kết nối với OpenAI để thông minh hơn!)', sender: 'ai' }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-cream dark:bg-slate-800 rounded-2xl shadow-2xl mb-4 w-[350px] max-w-[calc(100vw-3rem)] overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col"
            style={{ height: '450px' }}
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex justify-between items-center shadow-sm">
              <div className="font-bold flex items-center gap-2">
                <FiCoffee className="text-xl" />
                AI Barista
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-1"></span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-amber-200 transition-colors">
                <FiX size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/50 dark:bg-slate-900/50">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-white rounded-tr-sm' 
                      : 'bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-tl-sm shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-gray-700">
              <div className="flex gap-2">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Hỏi về menu..."
                  className="flex-1 px-4 py-2 bg-gray-100 dark:bg-slate-700 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
                <button 
                  onClick={handleSend}
                  className="bg-primary text-white p-2 rounded-full hover:bg-secondary transition-colors flex items-center justify-center min-w-[40px]"
                >
                  <FiSend size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all cursor-pointer border-2 border-cream"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageCircle size={28} />}
      </button>
    </div>
  );
};

export default FloatingChatbot;
