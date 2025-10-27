import { useProductsContext } from "../../contexts/ProductsContext";
import { useCompareContext } from "../../contexts/CompareContext";
import { Link } from "react-router-dom";

export default function CompareCard({ product }) {
  const { searchedProduct, fetchProductById } = useProductsContext();

  const { CompareToggle, isInCompareList } = useCompareContext();

  return (
    <div className="card mb-3 detail-card mx-2">
      <img
        src={product.image}
        className="card-img-top compare-card-img"
        alt={product.title}
      />
      <div className="card-body d-flex flex-column border border-light-subtle grey-bg-card">
        <h5 className="card-title">{product.title}</h5>

        <p className="card-text mb-1">
          <strong>Materiale:</strong> {product.material}
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
              ? "❌ Rimuovi dalla pagina di confronto"
              : "🔍 Aggiungi alla pagina di confronto"}
          </button>
        </div>
      </div>
    </div>
  );
}
