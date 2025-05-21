// src/components/Header.tsx
import { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import CartDropdown from './CartDropdown';
import { CartItem } from '../types/types';

type CartDropdownProps = {
  onClose: () => void;
};

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          ShopEase
        </a>
        <div 
          className="cart-container"
          onMouseEnter={() => setIsCartOpen(true)}
          onMouseLeave={() => setIsCartOpen(false)}
        >
          <button
            className="btn btn-gradient w-100 d-flex align-items-center justify-content-center gap-2"
            style={{
              background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
              color: "#222",
              border: "none",
              fontWeight: "bold",
              boxShadow: "0 4px 14px rgba(0,201,255,0.15)",
              transition: "transform 0.1s",
            }}
            onMouseOver={e => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            <i className="bi bi-cart-plus"></i>
            Add to Cart
          </button>
          {isCartOpen && <CartDropdown onClose={() => setIsCartOpen(false)} />}
        </div>
      </div>
    </header>
  );
};

export default Header;