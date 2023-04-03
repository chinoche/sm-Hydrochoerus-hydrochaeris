/**
 * The model that will let us work with the Products individually
 */
export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: string[];
}