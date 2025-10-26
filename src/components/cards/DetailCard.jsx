import { useWishListContext } from "../../contexts/WishListContext";

export default function DetailCard({ product, onAddToWishlist, onCompare }) {
  const { wishListToggle, isInWishList } = useWishListContext();
  return (
    <div className="card mb-3 detail-card">
      <img
        src={product.image}
        className="card-img-top detail-card-img"
        alt={product.title}
      />
      <div className="card-body d-flex flex-column border border-light-subtle grey-bg-card">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text mb-1">
          <strong>Brand:</strong> {product.brand}
        </p>
        <p className="card-text mb-1">
          <strong>Categoria:</strong> {product.category}
        </p>
        <p className="card-text mb-1">
          <strong>Materiale:</strong> {product.material}
        </p>
        <p className="card-text mb-3">
          <strong>Prezzo:</strong> € {product.price}
        </p>

        <div className="d-flex flex-column flex-sm-row gap-2 ">
          <button
            className="btn btn-outline-danger btn-sm flex-grow-1"
            onClick={() => wishListToggle(product)}
          >
            {isInWishList(product)
              ? "❌ Rimuovi dalla Wishlist"
              : "❤️ Aggiungi alla Wishlist"}
          </button>

          <button
            className="btn btn-outline-secondary btn-sm flex-fill"
            onClick={onCompare}
          >
            🔍 Aggiungi alla pagina di confronto
          </button>
        </div>
      </div>
    </div>
  );
}
