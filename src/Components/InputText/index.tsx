/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, InputHTMLAttributes, Ref } from "react";
import { FieldErrors } from "react-hook-form";
import ErrorInput from "@Components/ErrorInput";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "number" | "password" | "date" | "file";
  label?: string;
  name: string;
  disabled?: boolean;
  placeholder?: string;
  errors?: FieldErrors | any;
  register: any;
}
const InputText = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    const {
      type,
      label,
      name,
      disabled = false,
      placeholder,
      errors,
      register,
    } = props;
    return (
      <div>
        <label
          htmlFor={name}
          className="
          mb-2 
          flex 
          flex-col 
          text-sm 
          font-medium 
          text-gray-900 
          dark:text-white"
        >
          {label}
          <input
            type={type}
            name={name}
            disabled={disabled}
            className="
            focus:ring-primary-600 
            focus:border-brand-green-100
            block w-full 
            rounded-lg 
            border 
            border-gray-300 
            bg-gray-50 p-2.5 
            text-gray-900 
            dark:border-gray-600 
            dark:bg-gray-700 
            dark:text-white 
            dark:placeholder-gray-400 
            dark:focus:border-blue-500 
            dark:focus:ring-blue-500 
            sm:text-sm"
            placeholder={placeholder}
            ref={ref}
            {...register(name)}
          />
          {errors && errors[name] && (
            <ErrorInput message={errors[name].message} />
          )}
        </label>
      </div>
    );
  },
);

export default InputText;
