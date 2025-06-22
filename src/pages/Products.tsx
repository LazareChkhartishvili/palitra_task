// pages/Products.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../types/product";
import { addToCart } from "../services/cartService";
import toast from "react-hot-toast";
import "../styles/products.scss";
import ProductsHeader from "../components/ProductsHeader";
import ProductList from "../components/ProductList";

const Products = () => {
  const [username, setUsername] = useState<string | null>("");
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<number | null>(null);
  const [token, setToken] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const tokenStored = localStorage.getItem("token");

    if (!userData || !tokenStored) {
      navigate("/login");
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUsername(parsedUser.firstName);
    setUserId(parsedUser.id);
    setToken(tokenStored);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [navigate]);

  const handleAddToCart = async (product: Product) => {
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="products-container">
      <ProductsHeader handleLogout={handleLogout} username={username} />
      <hr />
      <ProductList handleAddToCart={handleAddToCart} loading={loading} />
    </div>
  );
};

export default Products;
