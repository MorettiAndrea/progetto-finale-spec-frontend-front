import { createContext, useContext, useState } from "react";

import { useProductsContext } from "./ProductsContext";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const CompareContext = createContext();
const useCompareContext = () => useContext(CompareContext);

function CompareContextProvider({ children }) {
  const { productsList } = useProductsContext();

  // const[CompareList,setCompareList]
}
