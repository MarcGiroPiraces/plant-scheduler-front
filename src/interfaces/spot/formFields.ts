import { z } from "zod";

export const spotFormFieldsSchema = z.object({
  room: z.string(),
  place: z.string(),
});
export type SpotFormFields = z.infer<typeof spotFormFieldsSchema>;
