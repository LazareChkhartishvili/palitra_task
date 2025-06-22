import { HiOutlineShoppingBag } from "react-icons/hi2";
import { products } from "../data/products";
import type { Product } from "../types/product";

interface ProductListProps {
  handleAddToCart: (product: Product) => void;
  loading: boolean;
}

const ProductList = ({ handleAddToCart, loading }: ProductListProps) => {
  return (
    <main className="products-grid">
      {loading
        ? Array(8)
            .fill(0)
            .map((_, i) => (
              <article key={i} className="product-card loading-card" />
            ))
        : products.map((product) => (
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
                <p>₾{product.price}</p>
                <HiOutlineShoppingBag
                  color="#000000"
                  size={25}
                  onClick={() => handleAddToCart(product)}
                />
              </div>
            </article>
          ))}
    </main>
  );
};

export default ProductList;
