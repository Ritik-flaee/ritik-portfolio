import React from "react";

export function Button({ children, className = "", asChild = false, ...props }) {
  const Component = asChild ? "a" : "button";

  return (
    <Component
      className={`inline-flex items-center justify-center rounded-2xl bg-black px-4 py-2 text-white hover:bg-gray-800 transition ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
