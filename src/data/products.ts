import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    title: "კოლიმური მოთხრობები",
    author: "ვარლამ შალამოვი",
    price: 10.99,
    image: "/src/assets/kolimuri.jpg",
  },
  {
    id: 2,
    title: "მეტისმეტად ხმაურიანი მარტოობა",
    author: "ბოჰუმილ ჰრაბალი",
    price: 11.2,
    image: "/src/assets/hrabal.jpg",
  },
  {
    id: 3,
    title: "სული რომ ამომდიოდა",
    author: "უილიამ ფოლკნერი",
    price: 9.99,
    image: "/src/assets/soul.jpg",
  },
  {
    id: 4,
    title: "პედრო პარამო",
    author: "ხუან რულფო",
    price: 10.99,
    image: "/src/assets/paramo.jpg",
  },
];
