import z from "zod";

export const schema = z.object({
  usernameOrEmail: z.string({
    required_error: "Email is required",
  }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters long"),
});
