import React from 'react';
import { Star, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  key?: React.Key;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.article 
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="group"
    >
      <div className="aspect-[3/4] bg-surface-beige overflow-hidden relative mb-6">
        <img 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          src={product.image} 
        />
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500"></div>
        <button 
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 left-4 right-4 bg-primary text-white py-3 font-sans text-xs tracking-widest translate-y-20 group-hover:translate-y-0 transition-transform duration-500 uppercase font-semibold"
        >
          Quick Add — ${product.price}
        </button>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <h4 className="font-serif text-lg text-stone-900">{product.name}</h4>
          <span className="font-sans text-stone-600">${product.price}</span>
        </div>
        <p className="font-sans text-[10px] text-stone-400 uppercase tracking-widest font-bold">{product.category}</p>
        <div className="flex items-center gap-1 pt-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < product.rating ? "text-primary fill-primary" : "text-stone-200 fill-stone-200"} 
            />
          ))}
          <span className="text-[10px] text-stone-400 ml-1">({product.reviews})</span>
        </div>
      </div>
    </motion.article>
  );
}

interface FilterSidebarProps {
  selectedSkinTypes: string[];
  setSelectedSkinTypes: (val: string[]) => void;
  selectedConcerns: string[];
  setSelectedConcerns: (val: string[]) => void;
}

export function FilterSidebar({ 
  selectedSkinTypes, 
  setSelectedSkinTypes,
  selectedConcerns,
  setSelectedConcerns 
}: FilterSidebarProps) {
  const skinTypes = ['Normal to Dry', 'Combination', 'Oily', 'Sensitive'];
  const concerns = ['Hydration', 'Anti-Aging', 'Brightness'];

  const toggle = (list: string[], setList: (v: string[]) => void, item: string) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="sticky top-32 space-y-12">
        <div>
          <h3 className="font-sans text-[10px] text-stone-900 mb-6 uppercase tracking-[0.2em] border-b border-stone-200 pb-2 font-bold">Skin Type</h3>
          <ul className="space-y-3 font-sans text-sm text-stone-500">
            {skinTypes.map(type => (
              <li 
                key={type}
                onClick={() => toggle(selectedSkinTypes, setSelectedSkinTypes, type)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className={`w-4 h-4 border transition-colors ${selectedSkinTypes.includes(type) ? 'border-primary bg-primary/10' : 'border-stone-200 group-hover:border-primary'}`}></div>
                <span className={`transition-colors ${selectedSkinTypes.includes(type) ? 'text-primary' : 'group-hover:text-primary'}`}>{type}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-[10px] text-stone-900 mb-6 uppercase tracking-[0.2em] border-b border-stone-200 pb-2 font-bold">Concern</h3>
          <ul className="space-y-3 font-sans text-sm text-stone-500">
            {concerns.map(concern => (
              <li 
                key={concern}
                onClick={() => toggle(selectedConcerns, setSelectedConcerns, concern)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className={`w-4 h-4 border transition-colors ${selectedConcerns.includes(concern) ? 'border-primary bg-primary/10' : 'border-stone-200 group-hover:border-primary'}`}></div>
                <span className={`transition-colors ${selectedConcerns.includes(concern) ? 'text-primary' : 'group-hover:text-primary'}`}>{concern}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
