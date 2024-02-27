import { addTransplanting } from "../tranplanting/apiCalls/addTransplanting";
import { TransplantingFormFields } from "../tranplanting/interfaces/formFields";

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
