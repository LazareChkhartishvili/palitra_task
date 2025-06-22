import { useNavigate } from "react-router-dom";
import "../styles/products.scss";
import ProductsHeader from "../components/ProductsHeader";
import ProductList from "../components/ProductList";
import { useProducts } from "../hooks/useProducts";

const Products = () => {
  const { username, handleAddToCart, handleLogout } = useProducts();
  const navigate = useNavigate();

  return (
    <div className="products-container">
      <ProductsHeader
        handleLogout={() => handleLogout(navigate)}
        username={username}
      />
      <hr />
      <ProductList handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Products;
