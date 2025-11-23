import { cn } from "../../utils/cn";
import React from "react";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border border-gray-200 rounded-2xl shadow-sm p-6 bg-white",
        className
      )}
      {...props}
    />
  );
}
