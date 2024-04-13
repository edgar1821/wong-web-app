import { Sidebar } from "flowbite-react";
import { RiLockPasswordLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import SidebarTheme from "./sidebarTheme";
import { URLS } from "@Constants/url";

function SidebarApp() {
  return (
    <Sidebar theme={SidebarTheme}>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href={URLS.URL_MY_PROFILE} icon={ImProfile}>
            Mi perfil
          </Sidebar.Item>
          <Sidebar.Item
            href={URLS.URL_CHANGE_PASSWORD}
            icon={RiLockPasswordLine}
          >
            Cambiar contraseña
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarApp;
