interface PageTitleProps {
  children: React.ReactNode;
}
function PageTitle(props: PageTitleProps) {
  const { children } = props;
  return (
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
  );
}

export default PageTitle;
