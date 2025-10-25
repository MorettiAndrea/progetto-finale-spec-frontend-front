import React from "react";

function WishListTable({ product }) {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.category}</td>
    </tr>
  );
}

export default React.memo(WishListTable);
