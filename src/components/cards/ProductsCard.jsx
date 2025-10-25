import { Link } from "react-router-dom";
import React from "react";
import { useWishListContext } from "../../contexts/WishListContext";

function ProductsCard({ product }) {
  const { wishListToggle } = useWishListContext();
  return (
    <div className="card h-100 shadow-sm border-light mx-1 rounded-1 bg-light text-dark">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          <strong>Nome prodotto: </strong> {product.title}
        </h5>
        <p className="card-text text-secondary mb-3">
          <strong>Categoria: </strong> {product.category}
        </p>

        <div className="d-flex flex-column flex-sm-row justify-content-between gap-2 mb-3">
          <button
            className="btn btn-outline-danger btn-sm flex-grow-1"
            onClick={() => wishListToggle(product)}
          >
            ❤️ Aggiungi alla Wishlist
          </button>

          <button
            className="btn btn-outline-secondary btn-sm flex-grow-1"
            // da sostituire con logica dell on compare
            onClick={() => console.log("on compare")}
          >
            🔍 Aggiungi alla pagina di confronto
          </button>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="btn btn-dark btn-sm w-100 mt-auto"
        >
          Dettagli
        </Link>
      </div>
    </div>
  );
}

export default React.memo(ProductsCard);
