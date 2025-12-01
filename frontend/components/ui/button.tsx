import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex justify-center items-center gap-2.5 font-medium text-base leading-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer ",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 text-white shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.08)] shadow-[0px_1px_1px_-1px_rgba(0,0,0,0.12)] shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.12)] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.04)] shadow-[inset_0px_0px_0px_1px_rgba(253,253,255,0.04)] hover:bg-zinc-800",
        outline:
          "bg-transparent text-white outline outline-2 outline-offset-[-2px] outline-zinc-900 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.08)] shadow-[0px_1px_1px_-1px_rgba(0,0,0,0.12)] shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.12)] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.04)] shadow-[inset_0px_0px_0px_1px_rgba(253,253,255,0.04)] hover:bg-zinc-900/50",
      },
      size: {
        default: "h-12 px-4 py-2 rounded-lg",
        sm: "h-10 px-3 py-2 rounded-lg",
        lg: "h-14 px-6 py-3 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

export { Button, buttonVariants };
