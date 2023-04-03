import {Product} from "./Product";

export interface ProductData {
  products: Product [];
  total: number;
  skip: number;
  limit: number;
}

