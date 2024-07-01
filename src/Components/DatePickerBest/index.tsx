import { Datepicker } from "flowbite-react";
import { useFormContext, Controller } from "react-hook-form";

interface DatePickerProps {
  name: string;
  label: string;
}

function DatePickerBest({ name, label }: DatePickerProps) {
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
          <Datepicker
            language="es"
            onChange={(data) => {
              console.log("pick", data);

              // React.ChangeEventHandler<HTMLInputElement>
              field.onChange(data);
            }}
            onBlur={field.onBlur}
            value={field.value}
            // name={field.name}
          />
        )}
      />
    </div>
  );
}

export default DatePickerBest;
