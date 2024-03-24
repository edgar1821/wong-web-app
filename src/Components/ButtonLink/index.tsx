interface LinkProps {
  href: string;
  children: React.ReactNode;
  color?: "green" | "red";
}
function Link(props: LinkProps) {
  const { href, children, color = "green" } = props;
  return (
    <a
      href={href}
      className={`
      font-medium 
      ${color == "green" && "text-brand-green-100"}
      ${color == "red" && "text-red-400"}
      last:pl-3 
      hover:underline
      dark:text-blue-500`}
    >
      {children}
    </a>
  );
}

export default Link;
