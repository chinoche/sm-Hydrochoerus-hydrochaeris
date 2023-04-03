import {Product} from "./Product";

/**
 * The model that will handle the get operations for the products and which will let us handle the pagination
 * in order to retrieve all the products.
 */
export interface ProductData {
  /** An array of {@link Product} that will contain all their information **/
  products: Product [];
  /** The total products, this is not the same as the stock, this is different for every product **/
  total: number;
  /** Will let us skip certain number of products in order to move to the next page **/
  skip: number;
  /** The limit pf products for the retrieval **/
  limit: number;
}

