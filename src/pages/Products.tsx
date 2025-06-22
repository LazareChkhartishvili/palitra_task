import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { addToCart, getCart, clearCart } from "../services/cartService";
import type { Product } from "../types/product";
import CartModal from "../components/CartModal";

import "./../styles/products.scss";

const Products = () => {
  const [username, setUsername] = useState<string | null>("");
  const [userId, setUserId] = useState<number | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsed = JSON.parse(userData);
      setUsername(parsed.firstName);
      setUserId(parsed.id);
      setCartProducts(getCart(parsed.id));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    if (userId !== null) clearCart(userId);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleAddToCart = (product: Product) => {
    if (userId === null) return;
    addToCart(userId, product);
    setCartProducts(getCart(userId));
    alert(`Added "${product.title}" to cart`);
  };

  const openCart = () => {
    if (userId === null) return;
    setCartProducts(getCart(userId));
    setIsCartOpen(true);
  };

  return (
    <div className="products-container">
      <header className="products-header">
        <h1 className="username">Welcome, {username}!</h1>
        <div className="buttons-group">
          <button className="button cart" onClick={openCart}>
            View Cart ({cartProducts.length})
          </button>
          <button className="button logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
      <hr />
      <main className="products-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.author}</p>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              კალათაში დამატება
            </button>
          </article>
        ))}
      </main>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        products={cartProducts}
      />
    </div>
  );
};

export default Products;
