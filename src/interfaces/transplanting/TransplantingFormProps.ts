import { TransplantingFormFields } from "./formFields";

export interface TransplantingFormProps {
  actionOnSubmit: (transplanting: TransplantingFormFields) => Promise<void>;
}
