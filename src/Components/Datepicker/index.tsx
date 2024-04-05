/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormContext, Controller } from "react-hook-form";

interface DatePickerProps {
  name: string;
  label: string;
}

const DatePickerInput: React.FC<DatePickerProps> = ({
  name,
  label,
}) => {
  const { control } = useFormContext();

  return (
    <div className="mb-3 flex flex-col">
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
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="date"
            placeholder="YYYY-MM-DD"
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
        )}
      />
    </div>
  );
};

export default DatePickerInput;
