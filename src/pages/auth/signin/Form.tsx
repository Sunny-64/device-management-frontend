import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { schema } from "./schema";
import { TextField } from "../../../components";
import { Link, useNavigate } from "react-router";
import { LOCAL_KEYS } from "../../../constants/local-keys";
import { Api } from "../../../services/ApiService";
import { setItem } from "../../../utils";
import { useAuth } from "../../../context";

interface FormData {
  email: string;
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
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    console.log({ data });
    const response = await Api.login(data);
    if (response.status === 200) {
      setItem(LOCAL_KEYS.ACCESS_TOKEN, JSON.stringify(response?.data?.token));
      navigate("/verify-otp");
    } else {
      alert("do not know what happened");
      console.log(response);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Email"
            name="email"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.email?.message}
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
