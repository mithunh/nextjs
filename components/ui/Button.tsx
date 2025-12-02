"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  icon,
  iconPosition = "left",
  className = "",
  disabled = false,
  ...props
}) => {
  const variantStyles = {
    primary: {
      outer:
        "p-px rounded-full disabled:opacity-50 disabled:cursor-not-allowed",
      inner:
        "bg-linear-[145deg] from-[#8C01FA] to-[#000000] rounded-full px-5 py-3 flex items-center justify-center gap-2 w-full font-medium transition-all duration-300 text-sm sm:text-base uppercase cursor-pointer ",
      gradientNormal: "linear-gradient(90deg, #440178, #8C01FA)",
      gradientHover: "linear-gradient(270deg, #440178, #8C01FA)",
    },
    secondary: {
      outer:
        "p-px rounded-full disabled:opacity-50 disabled:cursor-not-allowed",
      inner:
        "bg-black rounded-full px-5 py-3 flex items-center justify-center gap-2 w-full font-medium transition-all duration-300 text-sm sm:text-base uppercase cursor-pointer",
      gradientNormal: "linear-gradient(90deg, #BA9CFF, #300056)",
      gradientHover: "linear-gradient(270deg, #BA9CFF, #300056)",
    },
  };

  const v = variantStyles[variant];

  return (
    <motion.button
      initial={{ background: v.gradientNormal }}
      animate={{ background: v.gradientNormal }}
      whileHover={{ background: v.gradientHover }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`${v.outer} rounded-full text-white ${className}`}
      disabled={disabled}
      {...props}
    >
      <div className={v.inner}>
        {icon && iconPosition === "left" && (
          <span className="flex items-center">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="flex items-center">{icon}</span>
        )}
      </div>
    </motion.button>
  );
};

export default Button;
