export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  concern: string[];
  skinType: string[];
  productType: 'Cleansers' | 'Serums' | 'Moisturizers';
  rating: number;
  reviews: number;
  tagline: string;
}

export interface CartItem extends Product {
  quantity: number;
}
