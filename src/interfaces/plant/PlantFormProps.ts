import { PlantFormFields } from "./formFields";

export interface PlantFormProps {
  actionOnSubmit: (plant: PlantFormFields) => Promise<void>;
}
