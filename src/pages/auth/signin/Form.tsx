import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  Controller,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { schema } from "./schema";
import { TextField } from "../../../components";

interface FormData {
  usernameOrEmail: string;
  password: string;
}

const Form: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { usernameOrEmail: "", password: "" },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="usernameOrEmail"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Username or Email"
            name="usernameOrEmail"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.usernameOrEmail?.message}
          />
        )}
      />

    <Controller
        name="password"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Password"
            name="password"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.password?.message}
          />
        )}
      />    
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Form;
