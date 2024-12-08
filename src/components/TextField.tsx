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
}) => {
  return (
    <div className="text-field flex flex-col">
      <div className="flex gap-2">
        <label htmlFor={name}>{label}</label>
        {error && <span className="text-red-500">({error})</span>}
      </div>
      <input
        className="border border-gray-300 p-2 outline-none rounded-md"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
