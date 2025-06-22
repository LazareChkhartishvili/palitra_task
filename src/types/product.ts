export interface Product {
  id: number;
  title: string;
  author: string;
  price: number;
  image?: string;
}

export interface CartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
}
