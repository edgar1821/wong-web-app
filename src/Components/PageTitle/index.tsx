interface PageTitleProps {
  children: React.ReactNode;
  type?: "title" | "subtitle";
}
function PageTitle({ children, type = "title" }: PageTitleProps) {
  return (
    <>
      {type === "title" && (
        <h1
          className="
      mb-4 
      text-2xl 
      font-extrabold 
      leading-none 
      tracking-tight 
      text-brand-green-200 
      dark:text-white 
      md:text-4xl 
      "
        >
          {children}
        </h1>
      )}
      {type === "subtitle" && (
        <h2
          className="mb-4 
      text-xl 
      font-extrabold 
      leading-none 
      tracking-tight 
      text-brand-green-200 
      dark:text-white 
      md:text-2xl "
        >
          {children}
        </h2>
      )}
    </>
  );
}

export default PageTitle;
