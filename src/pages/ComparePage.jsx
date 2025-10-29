import { useCompareContext } from "../contexts/CompareContext";
import CompareCard from "../components/cards/CompareCard";

export default function ComparePage() {
  const { compareList } = useCompareContext();

  if (!compareList.length)
    return (
      <h1 className="text-center text-white my-5">
        Nessun prodotto selezionato per il confronto
      </h1>
    );

  return (
    <>
      <div className="container">
        <h1 className="text-center text-white my-5">Pagina di comparazione</h1>;
        <div className="row d-center">
          {compareList.map((p) => (
            <>
              {" "}
              <div className="col-6 d-center ">
                <CompareCard key={p.id} product={p} />{" "}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
