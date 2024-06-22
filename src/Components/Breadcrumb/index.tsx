import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export interface IItemBreadcrumb {
  path?: string;
  label: string;
}
export interface IBreadcrumb {
  items: IItemBreadcrumb[];
}
export function Component({ items }: IBreadcrumb) {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      {items.map((item, index) => (
        <>
          {index === 0 && (
            <Breadcrumb.Item href={item.path} icon={HiHome}>
              {item.label}
            </Breadcrumb.Item>
          )}
          {index !== 0 && (
            <Breadcrumb.Item key={item.path} href={item.path}>
              {item.label}
            </Breadcrumb.Item>
          )}
        </>
      ))}
    </Breadcrumb>
  );
}

export default Component;
