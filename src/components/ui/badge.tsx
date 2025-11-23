import { cn } from "../../utils/cn";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white",
        className
      )}
      {...props}
    />
  );
}
