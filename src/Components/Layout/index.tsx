import { useMemo } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}
function Layout({ children, title = "Ortopedia wong" }: LayoutProps) {
  //flex-col justify-center items-center flex-grow

  const documentTitle = useMemo(() => title, [title]);
  document.title = documentTitle;
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="container flex h-full flex-row">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="w-full p-5 md:px-10">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
