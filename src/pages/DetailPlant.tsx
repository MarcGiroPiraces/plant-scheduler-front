import { EditPlantForm } from "../components/plant/EditPlantForm";
import { useDetailPlantPage } from "../hooks/plant/useDetailPlantPage";

export function DetailPlantPage() {
  const { onSubmit } = useDetailPlantPage();

  return (
    <>
      <h1>Plant info</h1>
      <EditPlantForm actionOnSubmit={onSubmit} />
    </>
  );
}
