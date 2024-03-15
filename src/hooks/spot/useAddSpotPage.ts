import { addSpot } from "../../api/spot/addSpot.api";
import { SpotFormFields } from "../../interfaces/spot/formFields";

export const useAddSpotPage = () => {
  const onSubmit = async (spot: SpotFormFields): Promise<void> => {
    await addSpot(spot.room, spot.place);
  };

  return { onSubmit };
};
