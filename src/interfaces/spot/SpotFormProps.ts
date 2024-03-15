import { SpotFormFields } from "./formFields";

export interface SpotFormProps {
  actionOnSubmit: (spot: SpotFormFields) => Promise<void>;
}
