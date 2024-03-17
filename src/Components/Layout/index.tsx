import Navbar from "../Navbar";
import Footer from "../Footer";
function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="container flex flex-col justify-center items-center flex-grow">
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
