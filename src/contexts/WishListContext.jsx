import axios from "axios";
import { createContext, useContext, useState } from "react";
const WishListContext = createContext();
const useWishListContext = () => useContext(WishListContext);

const backendUrl = import.meta.env.VITE_BACKEND_URL;

import { useProductsContext } from "./ProductsContext";

function WishListProvider({ children }) {
  const { productsList } = useProductsContext();

  // wishlist completa

  const [wishList, setWishList] = useState([]);

  // toggle della modale

  const [showModal, setShowModal] = useState(false);

  // funzione singolo prodotto per avere più chiavi

  const fetchForWishList = async (id) => {
    if (!id) return null;

    try {
      const res = await axios.get(`${backendUrl}equipments/${id}`);
      return res.data.equipment;
    } catch (err) {
      console.error(err);
    }
  };

  // funzione aggiunta/rimozione dal carrello

  const wishListToggle = async (product) => {
    const findProduct = productsList.find((p) => p.id === product.id);
    if (!findProduct) return;

    const productInList = wishList.find((p) => p.id === findProduct.id);

    if (productInList) {
      setWishList((prev) => prev.filter((p) => p.id !== findProduct.id));
    } else {
      const toAddProduct = await fetchForWishList(product.id);
      setWishList((prev) => [...prev, toAddProduct]);
    }
  };

  // funzione per cambio messaggio del btn wishlist

  const isInWishList = (product) => {
    return wishList.some((p) => p.id === product.id);
  };

  return (
    <WishListContext.Provider
      value={{
        wishList,
        setWishList,
        wishListToggle,
        showModal,
        setShowModal,
        isInWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}

export { WishListProvider, useWishListContext };
