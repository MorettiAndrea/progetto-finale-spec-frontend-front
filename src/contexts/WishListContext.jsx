import { createContext, useContext, useState } from "react";
const WishListContext = createContext();
const useWishListContext = () => useContext(WishListContext);

import { useProductsContext } from "./ProductsContext";

function WishListProvider({ children }) {
  const { productsList } = useProductsContext();

  const [wishList, setWishList] = useState([]);

  const wishListToggle = (product) => {
    const findProduct = productsList.find((p) => p.id === product.id);
    if (!findProduct) return;

    const productInList = wishList.find((p) => p.id === findProduct.id);

    if (productInList) {
      setWishList((prev) => prev.filter((p) => p.id !== findProduct.id));
    } else {
      setWishList((prev) => [...prev, findProduct]);
    }
  };

  return (
    <WishListContext.Provider value={{ wishList, setWishList, wishListToggle }}>
      {children}
    </WishListContext.Provider>
  );
}

export { WishListProvider, useWishListContext };
