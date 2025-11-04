import { useCompareContext } from "../../contexts/CompareContext";
import { Link } from "react-router-dom";
import React from "react";
function CompareCard({ product }) {
  const { CompareToggle, isInCompareList } = useCompareContext();

  return (
    <div className="card mb-3 detail-card mx-2 d-flex flex-column h-100">
      <img
        src={product.image}
        className="card-img-top compare-card-img"
        alt={product.title}
      />
      <div className="card-body d-flex flex-column border border-light-subtle grey-bg-card compare-body-small">
        <h5 className="card-title">
          <strong>{product.title}</strong>
        </h5>

        <p className="card-text mb-1">
          <strong>Materiale:</strong> {product.brand}
        </p>
        <p className="card-text mb-3">
          <strong>Prezzo:</strong> € {product.price}
        </p>

        <div className="d-flex flex-column flex-sm-row gap-2 ">
          <Link
            to={`/product/${product.id}`}
            className="btn btn-outline-secondary btn-sm flex-fill"
          >
            Pagina di dettaglio
          </Link>
          <button
            className="btn btn-outline-danger btn-sm flex-fill"
            onClick={() => CompareToggle(product)}
          >
            {isInCompareList(product)
              ? "❌ Rimuovi dal confronto"
              : "🔍 Aggiungi al confronto"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default React.memo(CompareCard);
