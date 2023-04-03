import {Product} from "./Product";

/**
 * The model that will let us work with the items that are being added to the cart, it is defined by
 * {@link Product}
 */
export interface CartItem {
  /**
   * The Product that will be stored in the cart, it can be seen at {@link Product}
   */
  product: Product;
  /**
   * The quantity of the products that will be stored in the cart
   */
  quantity: number;
}