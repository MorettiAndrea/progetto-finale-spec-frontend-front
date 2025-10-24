import { useWishListContext } from "../../contexts/WishListContext";
import WishListTable from "../table/WishListTable";
export default function WishListModal() {
  const { wishList, setWishList, wishListToggle, showModal, setShowModal } =
    useWishListContext();
  if (!showModal) return null;

  return (
    <div className="modal-dialog modal-fullscreen-sm-down">
      <div className="container">
        {!wishList.length ? (
          <h2 className="Text-center">La tua lista dei preferiti è vuota!</h2>
        ) : (
          <>
            <h2 className="text-center">I tuoi preferiti</h2>
            <div className="row">
              <div className="col-6">
                <tr>
                  <th>Nome</th>
                  <th>Brand</th>
                  <th>Prezzo</th>
                </tr>
                {wishList.map((p) => (
                  <WishListTable key={p.id} product={p} />
                ))}
                <button
                  onClick={() => setShowModal(false)}
                  className="btn-btn-secondary"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
