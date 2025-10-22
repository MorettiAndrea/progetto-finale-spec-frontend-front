// react import
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pagine
import Homepage from "./assets/pages/Homepage";
import WishListPage from "./assets/pages/WishListPage";
import ProductsListPage from "./assets/pages/ProductsListPage";
import DetailPage from "./assets/pages/DetailPage";
import ComparePage from "./assets/pages/ComparePage";
import NotFoundPage from "./assets/pages/NotFoundPage";

// altri import

import paths from "./assets/data/paths";
import DefaultLayout from "./components/layoutComponents/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path={paths.homePage} element={<Homepage />} />
          <Route path={paths.wishListPage} element={<WishListPage />} />
          <Route path={paths.comparePage} element={<ComparePage />} />
          <Route path={paths.productsListPage} element={<ProductsListPage />} />
          <Route path={paths.detailPage} element={<DetailPage />} />
          <Route path={paths.notFoundPage} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
