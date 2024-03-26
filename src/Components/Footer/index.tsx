function Footer() {
  const date = new Date();
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full border-t border-gray-200 bg-white p-4 shadow dark:border-gray-600 dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © {date.getFullYear()}{" "}
        <a href="/" className="hover:underline">
          Ortopedia Wong
        </a>
        . Todos los derechos reservados.
      </span>
    </footer>
  );
}

export default Footer;
