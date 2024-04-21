import { Dropdown } from "flowbite-react";
import { Option } from "@Types/index";

interface DropProps {
  options: Option[];
  name: string;
}
export function DropDownList({ options, name }: DropProps) {
  return (
    <Dropdown label="Dropdown" name={name}>
      {options.length > 0 && (
        <>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </>
      )}
    </Dropdown>
  );
}

export default DropDownList;
