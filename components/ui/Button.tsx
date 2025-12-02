import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  icon?: React.ReactNode; // optional icon
  iconPosition?: "left" | "right"; // icon placement

} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  icon,
  iconPosition = "left",
  className = "",
  ...props
}) => {
  const baseStyles =
    "flex gap-2 items-center justify-center px-5 py-3 rounded-full font-medium transition-all duration-1000 text-sm sm:text-base text-white uppercase cursor-pointer border border-purple";

  const variantStyles = {
    primary: "bg-gradient-to-r from-purple to-black to-130% hover:to-200%",
    secondary: "bg-transparent hover:bg-purple/10",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default Button;
