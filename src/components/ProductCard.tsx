// src/components/ProductCard.tsx
import { Product } from '../types/types';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`}>★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half">½</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} style={{ opacity: 0.3 }}>★</span>);
    }
    
    return stars;
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top p-4"
        alt={product.title}
        style={{ height: '250px', objectFit: 'contain' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        {product.rating && (
          <div className="mb-2 d-flex align-items-center gap-2">
            <span className="text-warning">
              {Array.from({ length: 5 }).map((_, i) =>
                i < Math.round(product.rating.rate) ? (
                  <i key={i} className="bi bi-star-fill"></i>
                ) : (
                  <i key={i} className="bi bi-star"></i>
                )
              )}
            </span>
            <span className="text-muted" style={{ fontSize: "0.9rem" }}>
              ({product.rating.count})
            </span>
          </div>
        )}
        <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
          {product.description.slice(0, 80)}...
        </p>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="badge bg-primary">{product.category}</span>
            <span className="fw-bold text-success">${product.price}</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <button className="btn btn-outline-secondary btn-sm me-2">-</button>
            <span className="mx-2">1</span>
            <button className="btn btn-outline-secondary btn-sm me-2">+</button>
            <button className="btn btn-outline-danger btn-sm ms-auto">
              <i className="bi bi-trash"></i>
            </button>
          </div>
          <button
            className="btn btn-primary w-100"
            onClick={() => addToCart(product)}
          >
            <i className="bi bi-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;