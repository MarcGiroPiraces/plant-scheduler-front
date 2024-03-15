import { WateringForm } from "../components/watering/WateringForm";
import { useAddWateringPage } from "../hooks/watering/useAddWateringPage";

export function AddWateringPage() {
  const { onSubmit } = useAddWateringPage();

  return (
    <>
      <h1>Afegir reg</h1>
      <WateringForm actionOnSubmit={onSubmit} />
    </>
  );
}
