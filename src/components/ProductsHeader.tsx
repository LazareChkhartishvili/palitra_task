import type { ProductsHeaderProps } from "../types/productHeader";

const ProductsHeader = ({ username, handleLogout }: ProductsHeaderProps) => {
  return (
    <header className="products-header">
      <h1 className="username">{username}</h1>
      <button className="button logout" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default ProductsHeader;
