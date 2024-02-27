import { addWatering } from "../watering/apiCalls/addWatering";
import { WateringFormFields } from "../watering/interfaces/formFields";

export const useAddWateringPage = () => {
  const onSubmit = async (watering: WateringFormFields): Promise<void> => {
    await addWatering(watering.plantId, watering.fertilizer, watering.date);
  };

  return { onSubmit };
};
