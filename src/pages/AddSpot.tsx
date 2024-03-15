import { SpotForm } from "../components/spot/SpotForm";
import { useAddSpotPage } from "../hooks/spot/useAddSpotPage";

export function AddSpotPage() {
  const { onSubmit } = useAddSpotPage();

  return (
    <>
      <h1>Afegir lloc</h1>
      <SpotForm actionOnSubmit={onSubmit} />
    </>
  );
}
