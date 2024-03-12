import { Link } from "react-router-dom";
import { TransplantingForm } from "../components/transplanting/TransplantingForm";
import { useAddTransplantingPage } from "../hooks/transplanting/useAddTransplantingPage";

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
