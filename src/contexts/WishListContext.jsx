import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
const WishListContext = createContext();
const useWishListContext = () => useContext(WishListContext);

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function WishListProvider({ children }) {
  // wishlist completa

  const [wishList, setWishList] = useState([]);

  // toggle della modale

  const [showModal, setShowModal] = useState(false);

  // loader per local storage,evita conflitto con la strict mode di react

  const [wishFromLocal, setWishFromLocal] = useState(false);

  // localStorage
  useEffect(() => {
    const savedWishList = localStorage.getItem("wishlist");
    if (savedWishList) {
      try {
        setWishList(JSON.parse(savedWishList));
      } catch (error) {
        console.error(error);
      }
    }
    setWishFromLocal(true);
  }, []);

  useEffect(() => {
    if (wishFromLocal) {
      localStorage.setItem("wishlist", JSON.stringify(wishList));
    }
  }, [wishList, wishFromLocal]);

  // api singolo prodotto per avere più chiavi

  const fetchForWishList = async (id) => {
    if (!id) throw new Error("Errore durante la richiesta");

    try {
      const res = await axios.get(`${backendUrl}equipments/${id}`);
      return res.data.equipment;
    } catch (err) {
      console.error("Errore durante la richiesta", err.message);
      return null;
    }
  };

  // funzione aggiunta/rimozione dal carrello

  const wishListToggle = async (product) => {
    const isProductInList = wishList.some((p) => p.id === product.id);

    if (isProductInList) {
      setWishList((prev) => prev.filter((p) => p.id !== product.id));
    } else {
      const toAddProduct = await fetchForWishList(product.id);
      setWishList((prev) => [...prev, toAddProduct]);
    }
  };

  // funzione per eliminazione dalla modale

  const deleteFromWishList = (product) => {
    setWishList((prev) => prev.filter((p) => p.id !== product.id));
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
        deleteFromWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}

export { WishListProvider, useWishListContext };
