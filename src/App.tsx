import React, { useState, useMemo } from 'react';
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { Navbar, CartDrawer } from './components/Navigation';
import { Hero, StatsBar, DailyRitual, Footer } from './components/Sections';
import { ProductCard, FilterSidebar } from './components/ProductCollection';
import { IngredientSpotlight } from './components/IngredientSpotlight';
import { PRODUCTS } from './constants';
import { Product, CartItem } from './types';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<string[]>([]);
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSkinType = selectedSkinTypes.length === 0 || 
        product.skinType.some(type => selectedSkinTypes.includes(type));
      
      const matchesConcern = selectedConcerns.length === 0 || 
        product.concern.some(concern => selectedConcerns.includes(concern));
        
      return matchesSkinType && matchesConcern;
    });
  }, [selectedSkinTypes, selectedConcerns]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Navbar onCartToggle={() => setIsCartOpen(true)} cartCount={cartCount} />
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onRemove={removeFromCart}
      />

      <main>
        <Hero />
        <StatsBar />

        {/* Collection Section */}
        <section id="shop" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          {/* Header & Breadcrumbs */}
          <header className="pb-16 mb-16 border-b border-stone-100">
            <nav className="flex items-center gap-2 mb-8 text-[10px] text-stone-400 uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-primary transition-colors">Home</a>
              <ChevronRight size={10} />
              <span className="text-stone-900">Skincare Collection</span>
            </nav>
            
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Skincare Collection</h2>
                <p className="font-sans text-stone-500 max-w-xl leading-relaxed text-sm md:text-base">
                  Our botanical-based formulations are engineered with high-potency organic actives. We prioritize ingredient transparency and ethical sourcing to create a symbiotic relationship between your skin and the natural world.
                </p>
              </div>
              <div className="flex justify-start md:justify-end gap-6 text-[10px] font-bold tracking-[0.2em] font-sans uppercase">
                <span className="text-primary">{filteredProducts.length} PRODUCTS</span>
                <span className="text-stone-200">/</span>
                <button className="hover:text-primary transition-colors">Sort By: Featured</button>
              </div>
            </div>
          </header>

          <div className="flex flex-col lg:flex-row gap-16">
            <FilterSidebar 
              selectedSkinTypes={selectedSkinTypes}
              setSelectedSkinTypes={setSelectedSkinTypes}
              selectedConcerns={selectedConcerns}
              setSelectedConcerns={setSelectedConcerns}
            />

            <div className="flex-grow">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                  {filteredProducts.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onAddToCart={addToCart} 
                    />
                  ))}
                </div>
              ) : (
                <div className="py-24 text-center">
                  <p className="font-serif text-xl text-stone-400 italic">No products match your current filters.</p>
                  <button 
                    onClick={() => { setSelectedSkinTypes([]); setSelectedConcerns([]); }}
                    className="mt-4 text-xs font-bold border-b border-primary pb-1 uppercase tracking-widest"
                  >
                    Clear all filters
                  </button>
                </div>
              )}

              {/* Pagination Placeholder */}
              {filteredProducts.length > 0 && (
                <div className="mt-24 pt-12 border-t border-stone-100 flex justify-center items-center gap-12">
                  <button className="text-stone-300 cursor-not-allowed">
                    <ArrowLeft size={20} />
                  </button>
                  <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest font-sans">
                    <span className="text-stone-900 border-b-2 border-stone-900 pb-1">1</span>
                    <span className="text-stone-400 cursor-pointer hover:text-stone-900 transition-colors">2</span>
                  </div>
                  <button className="text-stone-900 hover:translate-x-1 transition-transform cursor-pointer">
                    <ArrowRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <IngredientSpotlight />
        <DailyRitual />
      </main>

      <Footer />
    </div>
  );
}
