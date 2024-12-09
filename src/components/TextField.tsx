import React from "react";

interface TextFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  type?: string;
  containerClassName?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder = "",
  error,
  type = "text",
  containerClassName,
}) => {
  return (
    <div className={`text-field flex flex-col ${containerClassName} items-start`}>
      <label htmlFor={name}>{label}</label>
      <input
        className="border border-gray-300 p-2 outline-none rounded-md w-full"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      <span className="inline-block w-full min-h-[0.97rem] text-red-500 leading-none text-sm text-left ml-1 pt-[0.1rem]">{error && error}</span>
    </div>
  );
};

export default TextField;
