import React from "react";
import { Link } from "react-router-dom";
import paths from "../../assets/data/paths";
import { useWishListContext } from "../../contexts/WishListContext";

function WishListTable({ product }) {
  const { setShowModal, deleteFromWishList } = useWishListContext();
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td>€ {product.price}</td>
      <td>
        <Link
          className="no-decoration btn  btn-outline-secondary"
          onClick={() => setShowModal(false)}
          to={paths.detailPage.replace(":id", product.id)}
        >
          <strong> 🔍 </strong>
        </Link>
      </td>
      <td>
        <button
          onClick={() => deleteFromWishList(product)}
          className="btn btn-danger"
        >
          Elimina
        </button>
      </td>
    </tr>
  );
}

export default React.memo(WishListTable);
