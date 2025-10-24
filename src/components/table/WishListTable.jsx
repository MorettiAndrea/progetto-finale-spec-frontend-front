import React from "react";

function WishListTable({ product }) {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.brand}</td>
      <td>€ {product.price} </td>
    </tr>
  );
}

export default React.memo(WishListTable);
