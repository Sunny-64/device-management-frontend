import z from "zod";

export const schema = z.object({
  email: z.string({
    required_error: "Email or Username is required",
  }).email("Invalid email"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters long"),
});
