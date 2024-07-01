import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";

export interface IItemBreadcrumb {
  key?: string;
  path?: string;
  label: string;
}
export interface IBreadcrumb {
  items: IItemBreadcrumb[];
}
export function BreadcrumWong({ items }: IBreadcrumb) {
  return (
    <Breadcrumb>
      {items.map((item, index) => (
        <>
          {index === 0 ? (
            <Breadcrumb.Item
              key={uuidv4()}
              href={item.path}
              icon={HiHome}
            >
              {item.label}
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item key={uuidv4()} href={item.path}>
              {item.label}
            </Breadcrumb.Item>
          )}
        </>
      ))}
    </Breadcrumb>
  );
}

export default BreadcrumWong;
