import {CartItem} from "../models/CartItem";
import {Product} from "../models/Product";

export function findItemInCart(cart: CartItem[], product: Product) {
  return cart.findIndex((item) => item.product.id === product.id);
}