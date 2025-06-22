import type { Product } from "../types/product";

export const addToCart = (userId: number, product: Product) => {
  const key = `cart_${userId}`;
  const cart = JSON.parse(localStorage.getItem(key) || "[]");
  cart.push(product);
  localStorage.setItem(key, JSON.stringify(cart));
};

export const getCart = (userId: number): Product[] => {
  const key = `cart_${userId}`;
  return JSON.parse(localStorage.getItem(key) || "[]");
};

export const clearCart = (userId: number) => {
  const key = `cart_${userId}`;
  localStorage.removeItem(key);
};
