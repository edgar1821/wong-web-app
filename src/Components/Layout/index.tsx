import Navbar from "../Navbar";

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

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 - Derechos Reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
