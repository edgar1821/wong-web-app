function Button({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button
      type="submit"
      className="
            bg-primary-600 
            hover:bg-primary-700 
            focus:ring-primary-300 
            dark:bg-primary-600 
            dark:hover:bg-primary-700 
            dark:focus:ring-primary-800 
            w-full rounded-lg px-5 py-2.5 
            text-center text-sm font-medium 
            text-white focus:outline-none 
            focus:ring-4"
    >
      {children}
    </button>
  );
}

export default Button;
