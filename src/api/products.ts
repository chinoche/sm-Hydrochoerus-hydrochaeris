import {ProductData} from "../models/ProductData";
import {Product} from "../models/Product";


const BASE_URL = 'https://dummyjson.com';

export async function fetchProducts(skip: number, limit: number): Promise<ProductData> {
  const response = await fetch(`${BASE_URL}/products?skip=${skip}&limit=${limit}`);
  const data: ProductData = await response.json();
  return data;
}

export async function fetchProduct(id: number): Promise<Product> {
  const response = await fetch(`${BASE_URL}/product/${id}`);
  const data = await response.json();
  return data;
}

