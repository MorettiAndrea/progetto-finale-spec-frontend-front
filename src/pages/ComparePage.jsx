import { useCompareContext } from "../contexts/CompareContext";

export default function ComparePage() {
  const {
    compareList,
    setCompareList,
    CompareToggle,
    deleteFromCompareList,
    isInCompareList,
  } = useCompareContext();
  return (
    <>
      <h1 className="text-center text-white">Sono la ComparePage</h1>;
    </>
  );
}
