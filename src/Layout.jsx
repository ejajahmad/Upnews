import React from "react";

export default function Layout({ children }) {
  return (
    <div
      className="max-w-2xl mx-auto "
      //  set background image
    >
      {children}
    </div>
  );
}
