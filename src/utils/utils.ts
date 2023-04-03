import {CartItem} from "../models/CartItem";
import {Product} from "../models/Product";

/**
 *
 * @param cart : The {@link models/CartItem} Array that contains a Product and its qty, so we can search over the array
 * and return if that existed before
 * @param product : The product that we pass, so we can compare the product id with the products stored in the
 * CartItem Array
 */
export function findItemInCart(cart: CartItem[], product: Product) {
  return cart.findIndex((item) => item.product.id === product.id);
}