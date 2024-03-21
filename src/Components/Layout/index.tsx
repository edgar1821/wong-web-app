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
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="container flex h-full flex-row">
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
