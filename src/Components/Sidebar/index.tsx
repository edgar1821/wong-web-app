import { Sidebar } from "flowbite-react";
import { HiShoppingBag, HiUser } from "react-icons/hi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineDocumentScanner, MdFactory } from "react-icons/md";

import SidebarTheme from "./sidebarTheme";
import * as Url from "@Constants/url";

function SidebarApp() {
  return (
    <Sidebar theme={SidebarTheme}>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href={Url.URL_PRODUCTS} icon={HiShoppingBag}>
            Productos
          </Sidebar.Item>
          <Sidebar.Item href={Url.URL_DOCTORS} icon={FaUserDoctor}>
            Doctores
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={MdOutlineDocumentScanner}>
            Proformas
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={MdFactory}>
            Ordenes de trabajo
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiUser}>
            Usuarios
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarApp;
