/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import ErrorInput from "@Components/ErrorInput";
import { Doctor } from "@Types/entities";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password";
  label?: string;
  name: string;
  disabled?: boolean;
  placeholder?: string;
}

function InputPhoneNumber(props: InputProps) {
  const { label, name } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext<Doctor>();

  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="
          mb-2 
          flex 
          flex-col 
          text-sm 
          font-bold 
          text-brand-green-100
          dark:text-white
          md:text-lg"
      >
        {label}
        <input
          type="text"
          {...register("phoneNumber", {
            required: "El número de teléfono es requerido",
            pattern: {
              value: /^\d{10}$/, // 10 dígitos numéricos para un número de teléfono típico
              message:
                "El número de teléfono debe tener 10 dígitos numéricos",
            },
          })}
          className="
                  focus:ring-primary-600 
                  block
                  w-full 
                  rounded-lg 
                  border 
                  border-gray-300 
                  bg-gray-50 
                  p-2.5 text-gray-900 
                  focus:border-brand-green-100 
                  dark:border-gray-600 
                  dark:bg-gray-700 
                  dark:text-white 
                  dark:placeholder-gray-400 
                  dark:focus:border-blue-500 
                  dark:focus:ring-blue-500 
                  sm:text-sm"
        />
      </label>
      {errors && errors.phoneNumber && (
        <ErrorInput message={errors.phoneNumber.message!} />
      )}
    </div>
  );
}

export default InputPhoneNumber;
