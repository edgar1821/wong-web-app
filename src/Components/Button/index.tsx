import {ButtonHTMLAttributes} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
children: React.ReactNode;
  color: 'green'
}
function Button({
  children,
}: ButtonProps) {
    //``
    
  return (
    <button
      type="submit"
      className={`bg-brand-green-100
            hover:bg-primary-700 
            focus:ring-primary-300 
            dark:bg-primary-600 
            dark:hover:bg-primary-700 
            dark:focus:ring-primary-800 
            w-full 
            rounded-lg 
            px-5 
            py-2.5 
            text-center 
            text-sm 
            font-medium 
            text-white 
            focus:outline-none 
            focus:ring-4`}
    >
      {children}
    </button>
  );
}

export default Button;
