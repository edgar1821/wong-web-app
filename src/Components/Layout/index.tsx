import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import SidebarProfile from "../SidebarProfile";

import { URL_CHANGE_PASSWORD, URL_MY_PROFILE } from "@Constants/url";
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}
function Layout({ children, title = "Ortopedia wong" }: LayoutProps) {
  //flex-col justify-center items-center flex-grow
  const location = useLocation();

  const documentTitle = useMemo(() => title, [title]);
  const isProfileSidebar = useMemo(
    () =>
      location.pathname === URL_MY_PROFILE ||
      location.pathname === URL_CHANGE_PASSWORD,
    [location.pathname],
  );
  document.title = documentTitle;
  console.log(location.pathname);

  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="container flex h-full flex-row">
        <div className="hidden md:block">
          {isProfileSidebar && <SidebarProfile />}
          {!isProfileSidebar && <Sidebar />}
        </div>
        <div className="w-full p-5 md:px-10">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
