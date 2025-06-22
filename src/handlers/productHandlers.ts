import type { Product } from "../types/product";
import { addToCart } from "../services/cartService";
import toast from "react-hot-toast";

export const handleAddToCart = async (
  product: Product,
  userId: number | null,
  token: string
) => {
  if (!userId || !token) return;
  try {
    const response = await addToCart(userId, product.id, 1, token);
    console.log("Add to Cart API response:", response);
    toast.success(`"${product.title}" დაემატა კალათაში`);
  } catch (err) {
    console.error(err);
    toast.error("პროდუქტის დამატება ვერ მოხერხდა");
  }
};

export const handleLogout = (navigate: (path: string) => void) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/login");
};
