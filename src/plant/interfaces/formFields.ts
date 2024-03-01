import { z } from "zod";

export const plantFormFieldsSchema = z.object({
  name: z.string(),
  description: z.string(),
  atHomeSince: z.string(),
  spotId: z.number(),
});

export type PlantFormFields = z.infer<typeof plantFormFieldsSchema>;
