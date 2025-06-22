import { useState, useEffect } from "react";
import { addToCart } from "../services/cartService";
import toast from "react-hot-toast";
import type { Product } from "../types/product";

export const useProducts = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const tokenStored = localStorage.getItem("token");
    if (userData && tokenStored) {
      const parsedUser = JSON.parse(userData);
      setUsername(parsedUser.firstName);
      setUserId(parsedUser.id);
      setToken(tokenStored);
    }
  }, []);

  const handleAddToCart = async (product: Product) => {
    if (!userId || !token) return;
    try {
      await addToCart(userId, product.id, 1, token);
      toast.success(`"${product.title}" დაემატა კალათაში`);
    } catch {
      toast.error("პროდუქტის დამატება ვერ მოხერხდა");
    }
  };

  const handleLogout = (navigate: (path: string) => void) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return { username, handleAddToCart, handleLogout };
};
