import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { addToCart, getCart, clearCart } from "../services/cartService";
import type { Product } from "../types/product";
import CartModal from "../components/CartModal";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./../styles/products.scss";
import { motion } from "framer-motion";

const Products = () => {
  const [username, setUsername] = useState<string | null>("");
  const [userId, setUserId] = useState<number | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const refreshCart = () => {
    if (user?.id) {
      const updatedCart = getCart(user.id);
      setCartProducts(updatedCart);
    }
  };

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
        <h1 className="username">{username}</h1>
        <div className="buttons-group">
          <button className="button cart" onClick={openCart}>
            <CiShoppingCart size={40} />
            {cartProducts.length > 0 && cartProducts.length}
          </button>
          <button className="button logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
      <hr />
      <main className="products-grid">
        {products.map((product, index) => (
          <motion.article
            key={product.id}
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
          >
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
          </motion.article>
        ))}
      </main>
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        products={cartProducts}
        userId={userId}
        refreshCart={refreshCart}
      />
    </div>
  );
};

export default Products;
