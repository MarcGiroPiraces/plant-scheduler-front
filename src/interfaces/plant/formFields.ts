import { z } from "zod";

export const plantFormFieldsSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  atHomeSince: z.string(),
  spotId: z.string(),
});

export type PlantFormFields = z.infer<typeof plantFormFieldsSchema>;
