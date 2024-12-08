import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { schema } from "./schema";
import { TextField } from "../../../components";

interface FormData {
  otp: string;
}

const Form: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { otp: "" },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="otp"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="OTP"
            name="otp"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.otp?.message}
          />
        )}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Form;
