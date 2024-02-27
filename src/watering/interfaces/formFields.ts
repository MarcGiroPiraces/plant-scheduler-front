import { z } from "zod";

export const wateringFormFieldsSchema = z.object({
  date: z.string(),
  fertilizer: z.boolean(),
  plantId: z.number(),
});
export type WateringFormFields = z.infer<typeof wateringFormFieldsSchema>;
