import z from "zod";

export const schema = z.object({
  otp: z
    .string({
      required_error: "Password is required",
    })
    .length(5, "OTP must be 5 digits"),
});
