import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const variants = {
      default:
        "bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition",
      outline:
        "border border-gray-300 text-gray-700 hover:bg-gray-100 active:scale-95 transition",
      ghost:
        "text-gray-700 hover:bg-gray-100 active:scale-95 transition",
    };

    return (
      <Comp
        className={cn(
          "px-4 py-2 rounded-lg font-medium",
          variants[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export default Button;
