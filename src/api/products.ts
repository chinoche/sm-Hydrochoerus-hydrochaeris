import {ProductData} from "../models/ProductData";
import {Product} from "../models/Product";

/**
 * The base url where we need to make the proper requests, it can be changed here, but make sure to
 * see if the methods below build the url correctly depending on which action is planned
 */
const BASE_URL = 'https://dummyjson.com';

/**
 *
 * Function that will let us retrieve all the products from the server
 *
 * @param skip : the number of items to omit, so we can retrieve the next items correctly and not repeat in the next
 * pages
 * @param limit : The number of items that will be returned in the products array that will be the outcome of this
 * function {@link models/ProductData}
 */
export async function fetchProducts(skip: number, limit: number): Promise<ProductData> {
  const response = await fetch(`${BASE_URL}/products?skip=${skip}&limit=${limit}`);
  const data: ProductData = await response.json();
  return data;
}

/**
 * Function taht will let us get the products by its id, so we can display the details
 * (we could have retrieved this information from the array for the details, but since this might change if other
 * people update a product, I decided to get it directly from the server
 * @param id : The product id as described at {@link models/Product}
 * @category fetchToApis
 */
export async function fetchProduct(id: number): Promise<Product> {
  const response = await fetch(`${BASE_URL}/product/${id}`);
  const data = await response.json();
  return data;
}

