import { TransplantingForm } from "../components/transplanting/TransplantingForm";
import { useAddTransplantingPage } from "../hooks/transplanting/useAddTransplantingPage";

export function AddTransplantingPage() {
  const { onSubmit } = useAddTransplantingPage();

  return (
    <>
      <h1>Afegir transplantament</h1>
      <TransplantingForm actionOnSubmit={onSubmit} />
    </>
  );
}
