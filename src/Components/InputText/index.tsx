/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, InputHTMLAttributes, Ref } from "react";
import { FieldErrors } from "react-hook-form";
import ErrorInput from "@Components/ErrorInput";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "number" | "search" | "date" | "file";
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
          className="flex flex-col mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
          <input
            type={type}
            name={name}
            disabled={disabled}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
  }
);

export default InputText;
