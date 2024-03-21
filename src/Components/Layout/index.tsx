import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //flex-col justify-center items-center flex-grow
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="container flex flex-row h-full">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
