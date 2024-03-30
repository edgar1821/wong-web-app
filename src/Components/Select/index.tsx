import Select, { StylesConfig } from "react-select";
import { useFormContext, Controller } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  options: Option[];
  defaultValue?: string | null;
  label: string;
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
            options={options}
            onChange={(value) => field.onChange(value)}
            onBlur={() => field.onBlur(field.value)}
            styles={customStyles}
          />
        )}
      />
    </div>
  );
};

export default SelectInput;
