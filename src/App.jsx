// react import
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pagine
import HomePage from "./pages/Homepage.jsx";
import WishListPage from "./pages/WishListPage";
import ProductsListPage from "./pages/ProductsListPage";
import DetailPage from "./pages/DetailPage";
import ComparePage from "./pages/ComparePage";
import NotFoundPage from "./pages/NotFoundPage";
import { ProductsListProvider } from "./contexts/productListContext.jsx";

// altri import

import paths from "./assets/data/paths";
import DefaultLayout from "./components/layoutComponents/DefaultLayout";

export default function App() {
  return (
    <>
      <ProductsListProvider>
        <BrowserRouter>
          <Routes>
            <Route path={paths.notFoundPage} element={<NotFoundPage />} />
            <Route element={<DefaultLayout />}>
              <Route path={paths.homePage} element={<HomePage />} />
              <Route path={paths.wishListPage} element={<WishListPage />} />
              <Route path={paths.comparePage} element={<ComparePage />} />
              <Route
                path={paths.productsListPage}
                element={<ProductsListPage />}
              />
              <Route path={paths.detailPage} element={<DetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductsListProvider>
    </>
  );
}
