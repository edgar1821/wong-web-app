import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { FaUserDoctor,  } from "react-icons/fa6";
import { MdOutlineDocumentScanner } from "react-icons/md";
// import { IoDocumentAttach } from "react-icons/io5";
import { MdFactory } from "react-icons/md";


import SidebarTheme from "./sidebarTheme";
function SidebarApp() {
  return (
    <Sidebar theme={SidebarTheme}>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Productos
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaUserDoctor}>
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
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>

        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarApp;
