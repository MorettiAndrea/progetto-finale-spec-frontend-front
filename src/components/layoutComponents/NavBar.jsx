// React import
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
// import contexts

import { useSearchBarContext } from "../../contexts/SearchBarContext";
import { useWishListContext } from "../../contexts/WishListContext";
import { useCompareContext } from "../../contexts/CompareContext";
import { useProductsContext } from "../../contexts/ProductsContext";

// altri import

import paths from "../../assets/data/paths";

export default function Navbar() {
  //  per searchbar

  const {
    searchedTerm,
    setSearchedTerm,
    searchedCategory,
    setSearchedCategory,
    sortOrder,
    setSortOrder,
  } = useSearchBarContext();

  // per  wishlist e show per modale wishlist

  const { setShowModal } = useWishListContext();
  const { compareList } = useCompareContext();

  // categorie per options aggiornate dinamicamente
  const { allCategories } = useProductsContext();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-top border-bottom">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to={paths.homePage}>
                  Torna alla Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={paths.productsListPage}>
                  Lista Prodotti
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to={paths.comparePage}>
                  Confronta 2 articoli(selezionati {compareList.length})
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setShowModal(true)}
                  className="btn btn-outline-danger"
                >
                  ❤️ Wishlist
                </button>
              </li>
            </ul>

            <form className="d-flex align-items-center gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Cerca un prodotto..."
                value={searchedTerm}
                onChange={(e) => setSearchedTerm(e.target.value)}
              />

              <select
                className="form-select"
                value={searchedCategory}
                onChange={(e) => setSearchedCategory(e.target.value)}
              >
                {allCategories.map((p, index) => (
                  <option key={index} value={p}>
                    {p}
                  </option>
                ))}
              </select>

              <select
                className="form-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="">Ordina per...</option>
                <option value="title-asc">Titolo (A-Z)</option>
                <option value="title-desc">Titolo (Z-A)</option>
                <option value="category-asc">Categoria (A-Z)</option>
                <option value="category-desc">Categoria (Z-A)</option>
              </select>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
