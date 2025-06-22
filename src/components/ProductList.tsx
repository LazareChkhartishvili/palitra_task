import { HiOutlineShoppingBag } from "react-icons/hi2";
import { products } from "../data/products";
import type { Product } from "../types/product";

const ProductList = ({
  handleAddToCart,
}: {
  handleAddToCart: (product: Product) => void;
}) => {
  return (
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
            <p>{product.price}₾</p>
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
