import { Link } from "react-router-dom";
import { useAddTransplantingPage } from "../hooks/useAddTransplantingPage";
import { TransplantingForm } from "../tranplanting/components/TransplantingForm";

export function AddTransplantingPage() {
  const { onSubmit } = useAddTransplantingPage();

  return (
    <>
      <Link to={`/`}>Tornar a la llista de plantes</Link>
      <h1>Afegir transplantament</h1>
      <TransplantingForm actionOnSubmit={onSubmit} />
    </>
  );
}
