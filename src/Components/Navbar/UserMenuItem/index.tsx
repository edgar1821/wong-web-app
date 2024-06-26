function UserMenuItem({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  return (
    <li>
      <a
        href={href}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {children}
      </a>
    </li>
  );
}

export default UserMenuItem;
