export default function DetailCard({ product, onAddToWishlist, onCompare }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      {/* da fixare la card è brutta e l'immagine è gigante*/}
      <img
        src={product.image ? product.image : "Nessuna immagine"}
        className="card-img-top"
        alt={product.title}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted">{product.category}</p>

        <p className="card-text fw-bold mb-3 text-success">€{product.price}</p>

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
      </div>
    </div>
  );
}
