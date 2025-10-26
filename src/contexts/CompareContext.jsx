// import

import { createContext, useContext, useState } from "react";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const CompareContext = createContext();
const useCompareContext = () => useContext(CompareContext);

function CompareContextProvider({ children }) {
  const [compareList, setCompareList] = useState([]);

  //   api get all'id singolo per prendere piu chiavi

  const fetchForCompare = async (id) => {
    if (!id) throw new Error("Errore durante la richiesta");
    try {
      const res = await axios.get(`${backendUrl}/equipments${id}`);
      return res.data.equipment;
    } catch (err) {
      console.error("errore durante la richiesta", err.message);
    }
  };

  //   funzione per rimozione o aggiunta nella CompareList

  const CompareToggle = async (product) => {
    try {
      const isProductInList = compareList.some((p) => p.id === product.id);

      if (isProductInList) {
        setCompareList((prev) => prev.filter((p) => p.id !== product.id));
      } else if (!isProductInList && compareList.length < 2) {
        const toAddProduct = await fetchForCompare(product.id);

        if (toAddProduct) {
          setCompareList((prev) => [...prev, toAddProduct]);
        }
      } else {
        alert("Massimo 2 prodotti selezionabili per la pagina di confronto");
      }
    } catch (err) {
      console.error("Errore durante la richiesta,", err.message);
      return null;
    }
  };

  //     funzione eliminazione da aggiungere in pagina di confronto

  const deleteFromCompareList = (product) => {
    return setCompareList((prev) => prev.filter((p) => p.id !== product.id));
  };

  //   funzione per messaggio custom nelle card

  const isInCompareList = (product) => {
    return compareList.some((p) => p.id === product.id);
  };

  return (
    <CompareContext.Provider
      value={{ compareList, setCompareList, CompareToggle }}
    >
      {children}
    </CompareContext.Provider>
  );
}
export { CompareContextProvider, useCompareContext };
