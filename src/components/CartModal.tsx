import type { Product } from "../types/product";
import "./../styles/modal.scss";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

const CartModal = ({ isOpen, onClose, products }: CartModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        <h2>Your Cart</h2>

        {products.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="modal-grid">
            {products.map((product) => (
              <div key={product.id} className="modal-product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
