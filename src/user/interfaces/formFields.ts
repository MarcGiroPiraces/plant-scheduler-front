import { z } from "zod";

export const loginFormFieldsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginFormFields = z.infer<typeof loginFormFieldsSchema>;
