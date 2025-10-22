import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToWishlist, onCompare }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted">{product.category}</p>

        <div className="d-flex justify-content-between mb-3">
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={onAddToWishlist}
          >
            ❤️ Wishlist
          </button>

          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={onCompare}
          >
            🔍 Confronta
          </button>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="btn btn-dark btn-sm w-100 no-decoration"
        >
          Dettagli
        </Link>
      </div>
    </div>
  );
}
