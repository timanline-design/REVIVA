import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, Recycle, Heart } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <img 
        alt="Editorial skincare in nature" 
        className="absolute inset-0 w-full h-full object-cover" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_cLsk95DiUeMZKY1sIiLbekXa0qa8nK5zqYkHi-tNekPyIayeZl0iNPdf38icIDOchCtkKYfObEmbzQ-UDWY4sH1_5WH1q4DlLJB5wVkNOFAXO6Vsj7DssI9oc4e392vNdek2xk8XruCaHPX8SWzGzlF-7tDUiQp29lZmSFRKh3ZW4YvEkRqN5Gmp-iJRzWlq3KABb1A1TVaJgggSFGT_tWBCyyCCfV7ABC6XBTHPlznLftda9Wnhn6JKhAk585AcKbZkOhrIQE6r" 
      />
      <div className="absolute inset-0 bg-stone-900/25"></div>
      
      <div className="relative z-10 text-center text-white px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-sans uppercase tracking-[0.4em] mb-4 block text-xs md:text-sm"
        >
          New Chapter in Beauty
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-[80px] leading-tight mb-8"
        >
          The Science of <br className="hidden md:block" />Botanical Renewal
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans max-w-2xl mx-auto mb-10 text-stone-100/90 text-sm md:text-lg leading-relaxed"
        >
          High-potency organic actives meet circular chemistry. We believe your skincare should be as kind to the earth as it is to your skin.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <button className="bg-white text-stone-900 px-10 py-4 font-sans uppercase text-xs tracking-widest hover:bg-stone-100 transition-colors font-semibold">
            Shop the Collection
          </button>
          <button className="border border-white text-white px-10 py-4 font-sans uppercase text-xs tracking-widest hover:bg-white/10 transition-colors font-semibold">
            Our Philosophy
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export function StatsBar() {
  return (
    <section className="bg-primary text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
        <div className="flex flex-col gap-2">
          <span className="font-serif text-3xl">100%</span>
          <span className="font-sans uppercase tracking-widest opacity-80 text-[10px]">Carbon Neutral Shipping</span>
        </div>
        <div className="flex flex-col gap-2 border-y md:border-y-0 md:border-x border-white/20 py-8 md:py-0">
          <span className="font-serif text-3xl italic italic">B-Corp</span>
          <span className="font-sans uppercase tracking-widest opacity-80 text-[10px]">Certified Ethical Excellence</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-serif text-3xl">98%</span>
          <span className="font-sans uppercase tracking-widest opacity-80 text-[10px]">Biodegradable Formulations</span>
        </div>
      </div>
    </section>
  );
}

export function DailyRitual() {
  const steps = [
    {
      id: '01',
      title: 'Cleanse',
      desc: 'Melt away impurities without stripping your natural moisture barrier.',
      link: 'Botanical Balm',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnSP1GQ1Q6q5atPuaQ8d1eyX_1qfOnmj_ZjBkO4dz1n2K7MwxyPi7oS_CkAPAmkrV3fJzUqOTF4PMqWAOxripVNxoWMVmsbpZBLwZ2GvS46HAIHIg21cljhaVn2WmF1zrnCMY3cGQRC1wMsvpJh3RwsCjZVPDdUO9Hb1YCQvrn94KQXo5NbqxQ4tsims6ycvu2VBDKM6tY79ga7-BIKQypwaZUrUjYghPJr8pY-FsDDYPLd96d0gRWGlBTXALna3OPOfpk8wfmAB49'
    },
    {
      id: '02',
      title: 'Treat',
      desc: 'Target concerns with high-concentration botanical actives and vitamins.',
      link: 'Velvet Dew Serum',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMR1osCPFARDdc99BBsEsl77hQMiGRKw-0c-_P1cZRxHyctMR9pXrro1Mm7Tt4jy9zMIQRgauF9t7pL9IUdER9lBYQy9jRHOSim0N-_01SWbaPx68pluo4yv3nf4jsGBG6vVBpVLreUzxRY0-jOkXypwBKaeP9x1LOWePdpSHu5aHELAihf3Gakrg-27RBhQ-1vCQNoQS6zLGpanNihHDeL4MGj1E93juSKXmxTFIMgUM9T6GKGtaxrvYJKHqAM3-ZlPoBcBwtHsEo'
    },
    {
      id: '03',
      title: 'Hydrate',
      desc: 'Seal in moisture and repair with whipped nutrients for lasting radiance.',
      link: 'Whipped Butter',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM3q7gJOY103mfvnCzh97-k0wdcO-DBCZOD_n8ddTmPHf4dgG6zAcImICz9edh3k6Df_reLa6z1tHtf4OPZp-yJpBjZfKIaiUmmXhm8uFmxmb31mrITXUiJVNimCqO2R5u2_y9ZC1GOTxUW50fABZrtekwfK1SVrCuBpP5zY9feZapeHRmjiI5qhNuobScnqd-aE8JSdr3dEVZB7k_AjB6DhfSN8YrNQYTXlt3aBG06_2Ks0LcK3gMlRScaCpAQ2pkikw75WoF51N1'
    }
  ];

  return (
    <section className="bg-stone-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <span className="font-sans uppercase tracking-[0.3em] text-primary text-xs">Curated Care</span>
          <h2 className="font-serif text-4xl md:text-5xl">The Daily Ritual</h2>
          <p className="font-sans text-stone-500 max-w-xl mx-auto">Three steps to balanced, luminous skin. A minimalist routine with maximal results.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center space-y-6 group">
              <div className="relative w-full aspect-[4/5] bg-stone-100 overflow-hidden">
                <img 
                  alt={step.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                  src={step.image} 
                />
                <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 font-serif italic text-xl">{step.id}</div>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl">{step.title}</h3>
                <p className="font-sans text-sm text-stone-500 leading-relaxed max-w-xs">{step.desc}</p>
                <button className="text-xs font-bold border-b border-primary pb-1 group-hover:text-primary-light transition-colors uppercase tracking-widest flex items-center mx-auto gap-2">
                  {step.link} <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-24 px-6 md:px-12 flex flex-col items-center gap-16 bg-stone-50 border-t border-stone-200">
      <div className="font-serif text-2xl tracking-[0.3em] text-stone-800 uppercase">REVIVA</div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-7xl text-center md:text-left">
        <div className="space-y-6">
          <h5 className="font-serif text-sm uppercase tracking-widest text-primary-light">About</h5>
          <p className="font-sans text-xs text-stone-500 leading-relaxed">
            Dedicated to the alchemy of nature and science. Our products are crafted in small batches to ensure potency and purity.
          </p>
        </div>
        
        <div className="space-y-6">
          <h5 className="font-serif text-sm uppercase tracking-widest text-primary-light">Explore</h5>
          <ul className="space-y-3 font-sans text-sm">
            <li><a href="#" className="text-stone-500 hover:text-stone-800 transition-colors">Shop All</a></li>
            <li><a href="#" className="text-stone-500 hover:text-stone-800 transition-colors">Sustainability Report</a></li>
            <li><a href="#" className="text-stone-500 hover:text-stone-800 transition-colors">Ingredient Transparency</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="font-serif text-sm uppercase tracking-widest text-primary-light">Support</h5>
          <ul className="space-y-3 font-sans text-sm">
            <li><a href="#" className="text-stone-500 hover:text-stone-800 transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="text-stone-500 hover:text-stone-800 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-stone-500 hover:text-stone-800 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="font-serif text-sm uppercase tracking-widest text-primary-light">Newsletter</h5>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Join our circle" 
              className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-primary-light font-serif text-sm italic italic"
            />
            <button className="absolute right-0 bottom-2 text-stone-400 hover:text-primary transition-colors cursor-pointer">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl pt-12 border-t border-stone-200 flex flex-col items-center gap-8">
        <div className="flex gap-10 text-stone-400">
          <Leaf size={24} className="hover:text-primary-light transition-colors cursor-pointer" strokeWidth={1.5} />
          <Recycle size={24} className="hover:text-primary-light transition-colors cursor-pointer" strokeWidth={1.5} />
          <Heart size={24} className="hover:text-primary-light transition-colors cursor-pointer" strokeWidth={1.5} />
        </div>
        <p className="font-sans text-[10px] tracking-widest text-stone-400 uppercase">
          © 2026 REVIVA SUSTAINABLE SKINCARE. B-CORP CERTIFIED.
        </p>
      </div>
    </footer>
  );
}
