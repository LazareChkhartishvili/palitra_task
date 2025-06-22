// pages/Products.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import type { Product } from "../types/product";
import { addToCart } from "../services/cartService";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import toast from "react-hot-toast";
import "../styles/products.scss";

const Products = () => {
  const [username, setUsername] = useState<string | null>("");
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
      <header className="products-header">
        <h1 className="username">{username}</h1>
        <button className="button logout" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main className="products-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="add-to-cart-overlay">
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                კალათაში დამატება
              </button>
            </div>
            <h2>{product.title}</h2>
            <p>{product.author}</p>
            <div className="product-price">
              <p>${product.price}</p>
              <HiOutlineShoppingBag
                color="#000000"
                size={25}
                onClick={() => handleAddToCart(product)}
              />
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Products;
