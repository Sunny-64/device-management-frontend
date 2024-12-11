import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { schema } from "./schema";
import { TextField } from "../../../components";
import { setItem } from "../../../utils";
import { useNavigate } from "react-router";
import { useAuth } from "../../../context";
import { LOCAL_KEYS } from "../../../constants/local-keys";
import { Api } from "../../../services/ApiService";

interface FormData {
  otp: string;
}

interface FormProps {
  buttonText: string;
}

const Form: React.FC<FormProps> = ({ buttonText }: FormProps) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { otp: "" },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const response = await Api.verifyOtp(data);
    if (response.status === 200) {
      setItem(LOCAL_KEYS.IS_LOGGED_IN, JSON.stringify(true));
      login();
      navigate("/");
    } else {
      alert("do not know what happened");
      console.log(response);
    }
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
        className="bg-accent py-2 rounded-md text-white mb-2 mt-2 hover:opacity-70"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
