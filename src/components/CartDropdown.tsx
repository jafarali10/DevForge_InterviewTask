// src/components/CartDropdown.tsx
import { useCartStore } from '../store/cartStore';
import { CartItem } from '../types/types';

type CartDropdownProps = {
  onClose: () => void;
};

const CartDropdown: React.FC<CartDropdownProps> = ({ onClose }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCartStore();

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <h2>Cart</h2>
        {
          cartItems.length === 0 ? (<p>Your cart is empty</p>) :
            (
              <ul className="list-unstyled">
                {cartItems.map((item: CartItem) => (
                  <li
                    key={item.product.id}
                    className="d-flex align-items-center mb-3 border-bottom pb-2"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="cart-item-img me-3"
                      style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                    />
                    <div className="flex-grow-1">
                      <div className="fw-bold">{item.product.title}</div>
                      <div className="text-muted">${item.product.price}</div>
                      <div className="d-flex align-items-center mt-2">
                        <button
                          className="btn btn-outline-secondary btn-sm me-2"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >-</button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm me-2"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >+</button>
                        <button
                          className="btn btn-outline-danger btn-sm ms-2"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )
        }
        <button
          onClick={onClose}
          className="btn btn-secondary w-100 mt-3"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartDropdown;