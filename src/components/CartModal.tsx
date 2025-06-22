import type { Product } from "../types/product";
import { removeFromCart } from "../services/cartService";
import "./../styles/modal.scss";

import { IoMdClose } from "react-icons/io";
import toast from "react-hot-toast";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  userId: number | null;
  refreshCart: () => void;
}

const CartModal = ({
  isOpen,
  onClose,
  products,
  userId,
  refreshCart,
}: CartModalProps) => {
  if (!isOpen) return null;

  const handleRemove = (productId: number) => {
    if (userId === null) return;
    removeFromCart(userId, productId);
    refreshCart();
    toast.success(`აფსუს, რა წიგნი წაშალეე...`);
  };

  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <IoMdClose />
        </button>

        <h2 className="modal-title">შენი კალათა</h2>

        {products.length === 0 ? (
          <p className="empty-text">ამ ეტაპზე კალათა ცარიელია.</p>
        ) : (
          <>
            <div className="modal-grid">
              {products.map((product) => (
                <div key={product.id} className="modal-product-card">
                  <img src={product.image} alt={product.title} />
                  <div className="modal-product-info">
                    <h3>{product.title}</h3>
                    <h4>{product.author}</h4>
                    <p>${product.price.toFixed(2)}</p>
                    <button
                      className="modal-remove-btn"
                      onClick={() => handleRemove(product.id)}
                    >
                      წაშლა
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="modal-total">
              <strong>ჯამი:</strong> ${totalPrice.toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
