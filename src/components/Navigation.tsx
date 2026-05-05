import React from 'react';
import { Search, ShoppingBag, X, Trash2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface NavbarProps {
  onCartToggle: () => void;
  cartCount: number;
}

export function Navbar({ onCartToggle, cartCount }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-white/80 backdrop-blur-sm border-b border-stone-100 transition-all duration-500 ease-in-out">
      <div className="font-serif text-xl md:text-2xl tracking-[0.3em] uppercase text-stone-800">REVIVA</div>
      
      <div className="hidden md:flex items-center gap-10">
        <a href="#" className="text-stone-900 border-b border-stone-800 pb-1 font-serif uppercase text-xs tracking-widest transition-colors duration-300">Shop</a>
        <a href="#" className="text-stone-500 uppercase text-xs tracking-widest font-serif hover:text-primary-light transition-colors duration-300">Our Mission</a>
        <a href="#" className="text-stone-500 uppercase text-xs tracking-widest font-serif hover:text-primary-light transition-colors duration-300">Account</a>
      </div>

      <div className="flex items-center gap-4 md:gap-6 text-primary-light">
        <button className="hover:scale-110 transition-transform cursor-pointer">
          <Search size={22} strokeWidth={1.5} />
        </button>
        <button 
          onClick={onCartToggle}
          className="relative hover:scale-110 transition-transform cursor-pointer"
        >
          <ShoppingBag size={22} strokeWidth={1.5} />
          {cartCount > 0 && (
             <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
               {cartCount}
             </span>
          )}
        </button>
      </div>
    </nav>
  );
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

export function CartDrawer({ isOpen, onClose, items, onRemove }: CartDrawerProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/20 backdrop-blur-sm z-[55]"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] z-[60] bg-surface-beige border-l border-stone-200 shadow-2xl flex flex-col p-6 md:p-8"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="flex flex-col">
                <h2 className="text-lg font-serif uppercase tracking-widest text-primary-light">Your Selection</h2>
                <p className="text-xs font-serif text-stone-600">Sustainable beauty, mindfully chosen.</p>
              </div>
              <button 
                onClick={onClose}
                className="hover:rotate-90 transition-transform duration-300 cursor-pointer"
              >
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto hide-scrollbar space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <ShoppingBag size={48} className="text-stone-300" strokeWidth={1} />
                  <p className="font-serif text-stone-500 italic">Your bag is currently empty.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-stone-200 pb-4">
                    <img src={item.image} alt={item.name} className="w-20 h-24 object-cover" />
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif text-sm uppercase tracking-wider">{item.name}</h4>
                        <p className="text-xs text-stone-500 italic">{item.category}</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-serif">${item.price}</span>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-stone-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="pt-6 space-y-6">
                <div className="flex justify-between items-end border-t border-stone-200 pt-4">
                  <span className="font-serif uppercase tracking-widest text-xs">Subtotal</span>
                  <span className="font-serif text-lg">${subtotal}</span>
                </div>
                <button className="w-full bg-primary-light text-white py-5 font-serif tracking-widest text-sm hover:bg-primary transition-colors flex items-center justify-center gap-2">
                  PROCEED TO CHECKOUT
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
