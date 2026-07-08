import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingChatbot from './components/FloatingChatbot';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import AzureAIPrediction from './pages/AzureAIPrediction';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-gray-100 transition-colors duration-300 font-sans">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/ai-prediction" element={<AzureAIPrediction />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        <FloatingChatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
