import React, { useState, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  name: string;
  options: Option[];
}

const Dropdown: React.FC<DropdownProps> = ({ name, options }) => {
  const { control, setValue } = useFormContext();
  const [filteredOptions, setFilteredOptions] =
    useState<Option[]>(options);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  const normalize = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = normalize(event.target.value);
    const filtered = options.filter((option) =>
      normalize(option.label).includes(inputValue),
    );
    setFilteredOptions(filtered);
  };

  const handleSelectOption = (value: string) => {
    setValue(name, value); // Establece el valor del campo del formulario
  };

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input {...field} type="text" onChange={handleInputChange} />
        )}
      />
      <ul>
        {filteredOptions.map((option) => (
          <li
            key={option.value}
            onClick={() => handleSelectOption(option.value)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
