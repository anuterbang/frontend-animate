"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  { id: 1, name: "Whitening Day Cream", category: "Cream", price: "Rp 75.000", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Dark Spot Serum", category: "Serum", price: "Rp 120.000", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Facial Wash Gold", category: "Cleanser", price: "Rp 55.000", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Night Glow Repair", category: "Cream", price: "Rp 85.000", img: "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&q=80&w=400" },
  { id: 5, name: "Sunscreen SPF 50", category: "Sunscreen", price: "Rp 95.000", img: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&q=80&w=400" },
  { id: 6, name: "Essence Toner", category: "Cleanser", price: "Rp 65.000", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=400" },
];

const testimonials = [
  { id: 1, name: "Siska Amelia", role: "Beauty Enthusiast", text: "Baru pakai 7 hari, wajah kusam langsung jadi cerah banget! Teksturnya ringan dan nggak lengket.", avatar: "https://i.pravatar.cc/150?u=siska" },
  { id: 2, name: "Budi Santoso", role: "Skin Health Advocate", text: "Dark spot serumnya juara. Bekas jerawat yang sudah berbulan-bulan akhirnya pudar juga.", avatar: "https://i.pravatar.cc/150?u=budi" },
  { id: 3, name: "Clara Wijaya", role: "Model", text: "Sunscreen Animate itu penyelamat kulitku saat photoshoot outdoor. Nggak bikin whitecast!", avatar: "https://i.pravatar.cc/150?u=clara" },
];

export default function AnimateLanding() {
  const [filter, setFilter] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const categories = ['All', 'Serum', 'Cream', 'Cleanser', 'Sunscreen'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="bg-white overflow-x-hidden selection:bg-pink-100 selection:text-pink-600 font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-lg border-b border-pink-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-black text-pink-600 tracking-tighter italic cursor-pointer">ANIMATE.</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-600">
            <a href="#home" className="hover:text-pink-500 transition">Home</a>
            <a href="#shop" className="hover:text-pink-500 transition">Shop</a>
            <a href="#testimonials" className="hover:text-pink-500 transition">Testimonials</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:bg-pink-600 transition">Login</button>
            
            {/* Mobile Toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-800 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} /></svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: 'auto', opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-pink-50 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4 font-semibold text-gray-700">
                <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#shop" onClick={() => setIsMenuOpen(false)}>Shop</a>
                <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
                <button className="bg-pink-500 text-white py-3 rounded-xl">Login</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-b from-pink-50 to-white pt-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-bold uppercase tracking-widest mb-6">✨ 7 Days Brightening Result</div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              Pilih Cantikmu, <br/><span className="text-pink-500 underline decoration-pink-200">Pilih Animate.</span>
            </h1>
            <p className="text-gray-500 text-lg mb-10 max-w-md">Formula klinis untuk hidrasi maksimal dan mencerahkan kulit kusam secara instan.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:-translate-y-1">Shop Now</button>
              <button className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all">Learn More</button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative flex justify-center">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[450px] md:h-[450px] bg-pink-200 rounded-full blur-[80px] opacity-50 -z-10 animate-pulse"></div>
            <img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=600" alt="Hero" className="rounded-[2.5rem] shadow-2xl w-full max-w-md rotate-3 hover:rotate-0 transition-transform duration-700" />
          </motion.div>
        </div>
      </section>

      {/* --- PRODUCT SECTION --- */}
      <section id="shop" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Best Seller Collections</h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full mb-8"></div>
            <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
              {categories.map(cat => (
                <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2 rounded-full font-medium transition-all ${filter === cat ? 'bg-gray-900 text-white shadow-lg' : 'bg-pink-50 text-pink-600 hover:bg-pink-100'}`}>{cat}</button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product) => (
                <motion.div layout key={product.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="group">
                  <div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-pink-50 mb-6">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-pink-600">{product.category}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-black text-gray-900">{product.price}</span>
                    <button className="p-3 bg-gray-100 rounded-full hover:bg-pink-500 hover:text-white transition-all">🛒</button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section id="testimonials" className="py-24 bg-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What They Say</h2>
            <p className="text-gray-500 italic">Ribuan wanita Indonesia telah membuktikan hasilnya</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={t.id} 
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-pink-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-pink-200" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-pink-500 font-medium">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{t.text}"</p>
                <div className="mt-6 flex text-yellow-400 text-sm">★★★★★</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-20 border-b border-gray-800 pb-20">
          <div>
            <h2 className="text-3xl font-black italic text-pink-500 mb-6">ANIMATE.</h2>
            <p className="text-gray-400 leading-relaxed max-w-xs">Membangun kepercayaan diri melalui kulit yang sehat dan berkilau secara alami.</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Products</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-pink-500 transition">Serum</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">Cream</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Support</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-pink-500 transition">About Us</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Newsletter</h4>
            <div className="flex bg-gray-800 rounded-full p-1 border border-gray-700">
              <input type="text" placeholder="Email Anda" className="bg-transparent px-4 flex-1 outline-none text-sm" />
              <button className="bg-pink-500 text-white px-6 py-2 rounded-full text-xs font-bold">Join</button>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 text-gray-500 text-xs">© 2026 PT Animate Beauty Indonesia. All Rights Reserved.</div>
      </footer>
    </div>
  );
}