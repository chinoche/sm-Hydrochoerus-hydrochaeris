import {CartItem} from "../models/CartItem";
import React, {createContext, useContext, useEffect, useState} from "react";

type CartContextValue = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

function useStateWithStorage<T>(localStorageKey: string, defaultValue: T) {
  const storedValue = localStorage.getItem(localStorageKey);
  const [value, setValue] = useState<T>(storedValue ? JSON.parse(storedValue) : defaultValue);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [localStorageKey, value]);

  return [value, setValue];
}

export const CartProvider: React.FC<any> = ({children}) => {
  const [cart, setCart] = useStateWithStorage<CartItem[]>('cart', []);

  // @ts-ignore
  return <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>;
};

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
