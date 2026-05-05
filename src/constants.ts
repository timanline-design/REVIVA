import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Velvet Dew Serum',
    category: 'Hydration + Glow',
    price: 72,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA40-Wbh71mb1SIkeXiEb51ly784aUrhzy9W5ZyVzTead2mhOh-NPrqKp3_15SQoYYL5Sb-luvBRXXaoAIu1vQTE61zq8QUPlWDN4HsILL0EnpUoXLnDOH59gKmSQ0pFywgxTB8u-6F1AbL54f4rNcf-JBrFjVMEraSRCdMfo2k7vuqKcaRwSAbwAXNmkrh0cfqtGG5CztHIV0VbnROWxFS1zhrYoWycEfGcHk3tXYO9Cp5zMvJmLYwcfyOpEeAPK04KwwqOEGZeJln',
    concern: ['Hydration', 'Brightness'],
    skinType: ['Normal to Dry', 'Combination'],
    productType: 'Serums',
    rating: 5,
    reviews: 48,
    tagline: 'Deeply hydrating serum with botanical actives.'
  },
  {
    id: '2',
    name: 'Cleansing Balm',
    category: 'Melt + Purify',
    price: 58,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzFctgfLKVkQRg_AYhDoZaa5f-LyN0kFAqkY4r6UvQccMv5HBulicZZeJL50LrUZLDeqX03AN7trSRsJCDdQE6I4D1CU-TkGoVsr2huyRlZjhTfC5_bxwmFxUgourMAUOBqPRkjHrkLoSJmUh_AaV7u9smcXdB8RRSOr5xLJWhe283gt0vjeX86XZw8BKIuu3sQqe2R7qFvkUfIMY44IHk9hKubzWOGCg3wBByGWb-MM9rVueaqBYBoJuGgCAdvC0OQhwbo0FJOIT5',
    concern: ['Hydration'],
    skinType: ['Normal to Dry', 'Sensitive'],
    productType: 'Cleansers',
    rating: 4,
    reviews: 124,
    tagline: 'Gentle balm that melts away impurities.'
  },
  {
    id: '3',
    name: 'Luminous Oil',
    category: 'Repair + Radiance',
    price: 84,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr6646PclBMmjCdAWoPfHXWHkEqFPaJ7BxObSSiaNImpo0zpsh8PUxfiW4nFccvswnPPiy0SxNtsjnh0vA2ZQdGCTrsYOX7OxZUqfPytHa0_ZXGsGwBoBhoDU35TQzz5Sh83T2Wlxs9LoH4R4rraaaVV5r29VTjeGycLXEyQjYB_EfZX0kk3Ddf6TspB3E_GuumHm_LYScch1VHwouHLjvN8ridY8Chyk1R7gt5WXL6FyGuUUtZYdo8yd7jvnXU7SUSDXBgcjvewuq',
    concern: ['Anti-Aging', 'Brightness'],
    skinType: ['Normal to Dry'],
    productType: 'Serums',
    rating: 5,
    reviews: 92,
    tagline: 'Ethically sourced oils for luminous skin.'
  },
  {
    id: '4',
    name: 'Algae Mask',
    category: 'Detox + Mineralize',
    price: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALvC9knwwgJjhsFMO-Ma2MACOSfG0ZUs5BH_nHybddh7o_7wQruLSPIiY6RopDLHkVJw1DKIJVdmSodIHNn4NozyYi5M2o4WclynI_n8NQIbdxy957kkJsB134jKzsiIkkQKhhi63GTGSgIj-jGDkYWpuk-xx69bIOmakMqYXFsgmL9ADlqR7aCI7Dhx8f1g8otUJX2VXA_HzoFrZg4tvBQplkPZ75ZQG2VCvxNTYqcldx5q_8UVLhx60Ai3ZVegAqejumK5a2PyHo',
    concern: ['Brightness', 'Hydration'],
    skinType: ['Combination', 'Oily'],
    productType: 'Moisturizers',
    rating: 4,
    reviews: 31,
    tagline: 'Sustainable algae infusion for mineral detox.'
  },
  {
    id: '5',
    name: 'Rosehip Essence',
    category: 'Refresh + Tone',
    price: 42,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzY3Av7iSjhq2xSBF9NjldlOWCmAKHPIFlTYYyqlCrEhO6huoT-bVRCCfhexDM__zS2HBwwv2e7apuWp3jF1k-soYlb4OHgk6qg07a_HuHehqbHvkvmJT5Tja_uewvmEHDda9yQUEoLspyevyNX_GNen2sJRxR_LhwzAHeDoFw7KzhRJvHx1aNcGuAPvUY8rtM-POjCm_rBOheueRdeGnfCK9teGYSfxYUAQcomH5GHyyM_86K6eTOKGfgusxkUBStAwUG3aRi0Pex',
    concern: ['Anti-Aging', 'Brightness'],
    skinType: ['Combination', 'Sensitive'],
    productType: 'Serums',
    rating: 5,
    reviews: 56,
    tagline: 'Concentrated rosehip for natural toning.'
  },
  {
    id: '6',
    name: 'Whipped Butter',
    category: 'Deep Nourishment',
    price: 64,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfbmnuPv00NubjFnUzw830cO0n0c8cOQWfichtmMleVGzegyzTRZwywqWqPGpPv29zx9eUf3T01lRMwqDm2kxXhn2GSRLeehnBXgoUkUo1RVhSYYW0BkohIelNBC5eudzALY-W5Q-3gJAChND5OqRnMX8VZhCIT0SI4gzFQ-vKY1OA25HSVoWFxoGt1o9DFgtyYizpdCLPiLzHsZ9yJ-v1P5ZBUjFMW7U_9WrhJbQYOxj_NKHh69AATxOrPgbCEfwR1rTyV3bK0PDt',
    concern: ['Hydration'],
    skinType: ['Normal to Dry'],
    productType: 'Moisturizers',
    rating: 4,
    reviews: 88,
    tagline: 'Whipped shea nutrients for lasting repair.'
  }
];
