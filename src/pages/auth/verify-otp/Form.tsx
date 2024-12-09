import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { schema } from "./schema";
import { TextField } from "../../../components";
import { getItem, setItem } from "../../../utils";
import { useNavigate } from "react-router";
import { useAuth } from "../../../context";

interface FormData {
  otp: string;
}

interface FormProps {
  buttonText: string;
}

const Form: React.FC<FormProps> = ({ buttonText }: FormProps) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { otp: "" },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setItem("isLoggedIn", JSON.stringify(true));
    login();
    return navigate("/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
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
      <button
        className="bg-accent py-2 rounded-md text-white mb-2 mt-2"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
