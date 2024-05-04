"use client";

import React, { InputHTMLAttributes, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  initialValue?: string;
  mask?: (value: string) => string;
  validation?: (value: string) => { isValid: boolean; message?: string };
}

const Input = ({ initialValue = "", mask, validation, ...props }: Props) => {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (mask) value = mask(value);
    if (validation) {
      const { isValid, message } = validation(value);
      if (!isValid && message) {
        setError(message);
      }
    }
    setValue(e.target.value);
  };
  return (
    <>
      <input
        {...props}
        value={value}
        onChange={handleChange}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
      />
      {error && (
        <div>
          <span className="mt-1 hidden text-sm text-red-400">{error}</span>
        </div>
      )}
    </>
  );
};

export default Input;
