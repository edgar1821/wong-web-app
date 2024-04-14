/* eslint-disable @typescript-eslint/no-explicit-any */
import Select, { StylesConfig } from "react-select";
import {
  useFormContext,
  Controller,
  FieldErrors,
} from "react-hook-form";
import ErrorInput from "@Components/ErrorInput";
import { Option } from "@Types/index";

interface SelectProps {
  name: string;
  options: Option[];
  defaultValue?: string | null;
  label: string;
  errors?: FieldErrors | any;
}

const customStyles: StylesConfig = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? "1px solid #19593B" : "1px solid #ccc",
    borderRadius: "0.5rem",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #19593B",
    },
  }),
  option: () => ({
    padding: "4px",
    borderRadius: "5px",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#19593B",
      color: "white",
    },
  }),
};

const SelectInput: React.FC<SelectProps> = ({
  name,
  options,
  defaultValue,
  label,
  errors,
}) => {
  const { control } = useFormContext();

  return (
    <div className="mb-3 flex flex-col">
      <span
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
      </span>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue ?? ""}
        render={({ field }) => (
          <Select
            {...field}
            styles={customStyles}
            options={options}
            onChange={(selectOption) =>
              field.onChange(selectOption.value)
            }
            onBlur={field.onBlur}
          />
        )}
      />
      {errors && errors[name] && (
        <ErrorInput message={errors[name].message} />
      )}
    </div>
  );
};

export default SelectInput;
