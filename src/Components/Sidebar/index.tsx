import { Sidebar } from "flowbite-react";
import { HiShoppingBag, HiUser } from "react-icons/hi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineDocumentScanner, MdFactory } from "react-icons/md";

import SidebarTheme from "./sidebarTheme";
import { URLS } from "@Constants/url";

function SidebarApp() {
  return (
    <Sidebar theme={SidebarTheme}>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href={URLS.URL_PRODUCTS} icon={HiShoppingBag}>
            Productos
          </Sidebar.Item>
          <Sidebar.Item href={URLS.URL_DOCTORS} icon={FaUserDoctor}>
            Doctores
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href={URLS.URL_COTIZACION}
            icon={MdOutlineDocumentScanner}
          >
            Cotización
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={MdFactory}>
            Ordenes de trabajo
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href={URLS.URL_USERS} icon={HiUser}>
            Usuarios
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarApp;
