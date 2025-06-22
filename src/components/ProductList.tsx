import { HiOutlineShoppingBag } from "react-icons/hi2";
import { products } from "../data/products";
import type { Product } from "../types/product";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const productVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "tween" as const, stiffness: 100, damping: 10 },
  },
};

const ProductList = ({
  handleAddToCart,
}: {
  handleAddToCart: (product: Product) => void;
}) => {
  return (
    <motion.main
      className="products-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {products.map((product) => (
        <motion.article
          key={product.id}
          className="product-card"
          variants={productVariants}
          whileTap={{ scale: 0.95 }}
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
            <p>{product.price}₾</p>
            <HiOutlineShoppingBag
              color="#000000"
              size={25}
              onClick={() => handleAddToCart(product)}
            />
          </div>
        </motion.article>
      ))}
    </motion.main>
  );
};

export default ProductList;
