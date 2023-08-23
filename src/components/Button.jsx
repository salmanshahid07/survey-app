import React, { Children } from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      className="bg-green-600 h-10 min-w-max w-full rounded-md px-4 text-white font-medium"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
