import React from 'react';
import { ArrowRight } from 'lucide-react';

export function IngredientSpotlight() {
  return (
    <section className="bg-[#f0eded] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative">
          <img 
            alt="Sea Buckthorn Berries" 
            className="w-full aspect-square object-cover shadow-2xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6Vu24TKWgukpQjHU4g2g3msjnBBujlHRERde_4rBf6C1WaGxLQY7lyMYs_NboKC6x_imtSWnQaBf6Ke70Pob-UehS2zg68stvHtux3tJWWgS-s5YjZtyN5TfUagKmNVdwfA8ZovH3oX8bu5nTjUJ8RvLeFHK3UOtSMyBxfDX3DQZnWC7TUl6TGpb7tOj4CN9CzHlzLXfJLXOzZw0dLVI6ZDOFYTSx6PhZh0U2F4tkoWjouFo-DIL9QdhrAVoVW3LXKBYzvlri3i2u" 
          />
          <div className="absolute -bottom-8 -right-8 w-48 md:w-64 h-48 md:h-64 border border-primary/20 hidden lg:block"></div>
        </div>
        <div className="space-y-8">
          <span className="font-sans uppercase tracking-[0.3em] text-primary text-xs font-bold">Ingredient Spotlight</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">The Liquid Gold of <br className="hidden md:block" />Sea Buckthorn</h2>
          <p className="font-sans text-stone-600 leading-relaxed text-sm md:text-base">
            Packed with rare Omega-7 and rich antioxidants, our ethically sourced Sea Buckthorn is cold-pressed to preserve its vital nutrients. This powerful botanical accelerates skin repair, boosts collagen, and provides a natural barrier against environmental stressors.
          </p>
          <a href="#" className="inline-block border-b-2 border-primary pb-1 font-sans text-xs uppercase tracking-widest hover:text-primary-light transition-colors font-bold flex items-center gap-2">
            Explore our Ingredients <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
