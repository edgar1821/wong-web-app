import { Dropdown } from "flowbite-react";
import { Option } from "@Types/index";
import { useFormContext } from "react-hook-form";
interface DropProps {
  options: Option[];
  name: string;
}
export function DropDownList({ options, name }: DropProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Dropdown {...register(name)} label="Dropdown">
        {options.length > 0 && (
          <>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </>
        )}
      </Dropdown>
      {errors[name] && (
        <span className="text-red-500">{errors[name].message}</span>
      )}
    </>
  );
}

export default DropDownList;
