import { z } from "zod";

export const transplantingFormFieldsSchema = z.object({
  date: z.string(),
  potUpsize: z.boolean(),
  soilChange: z.boolean(),
  soilMix: z.string().min(2),
  plantId: z.number(),
});
export type TransplantingFormFields = z.infer<
  typeof transplantingFormFieldsSchema
>;
