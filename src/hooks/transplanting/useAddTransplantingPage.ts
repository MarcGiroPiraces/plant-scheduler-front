import { addTransplanting } from "../../api/transplanting/addTransplanting.api";
import { TransplantingFormFields } from "../../interfaces/transplanting/formFields";

export const useAddTransplantingPage = () => {
  const onSubmit = async (
    transplanting: TransplantingFormFields
  ): Promise<void> => {
    await addTransplanting(
      transplanting.plantId,
      transplanting.potUpsize,
      transplanting.soilChange,
      transplanting.soilMix,
      transplanting.date
    );
  };

  return { onSubmit };
};
