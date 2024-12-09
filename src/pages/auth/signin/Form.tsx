import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { schema } from "./schema";
import { TextField } from "../../../components";
import { Link } from "react-router";

interface FormData {
  usernameOrEmail: string;
  password: string;
}

type FormProps = {
  buttonText: string;
  secondaryButtonRedirect?: string;
  secondaryButtonText?: string;
};

const Form: React.FC<FormProps> = ({
  buttonText,
  secondaryButtonRedirect,
  secondaryButtonText,
}: FormProps) => {
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
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
      <button
        className="bg-accent py-2 rounded-md text-white mb-2 mt-4"
        type="submit"
      >
        {buttonText}
      </button>
      {secondaryButtonText && (
        <Link
          className="py-2 bg-secondary-light rounded-md"
          to={`/${secondaryButtonRedirect}` || "#"}
        >
          {secondaryButtonText}
        </Link>
      )}
    </form>
  );
};

export default Form;
