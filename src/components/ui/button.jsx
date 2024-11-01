import React from 'react';

export const Button = ({ variant, className, children, ...props }) => {
  const baseStyles = "inline-flex justify-center items-center rounded-md px-4 py-2 font-medium focus:outline-none";
  const variantStyles = variant === "outline" ? "border border-gray-300 bg-white text-gray-900" : "bg-blue-600 text-white";

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};
