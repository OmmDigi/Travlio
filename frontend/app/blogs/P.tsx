import React from "react";

export default function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`mt-5 font-medium text-justify ${className}`}>{children}</p>;
}
