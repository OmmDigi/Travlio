import React from "react";

export default function Heading({
  children,
  className,
  type,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "H1" | "H2" | "H3";
}) {
  const ComponentToRender = () => {
    if (type === "H1")
      return (
        <h1
          className={`font-semibold text-lg tracking-wider mt-6 ${className}`}
        >
          {children}
        </h1>
      );

    if (type === "H2")
      return (
        <h2
          className={`font-semibold text-lg tracking-wider mt-6 ${className}`}
        >
          {children}
        </h2>
      );

    return (
      <h2 className={`font-semibold text-lg tracking-wider mt-6 ${className}`}>
        {children}
      </h2>
    );
  };

  return <ComponentToRender />;
}
