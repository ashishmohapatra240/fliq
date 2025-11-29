import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer corner-squircle rounded-full",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 text-white shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.08)] shadow-[0px_1px_1px_-1px_rgba(0,0,0,0.12)] shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.12)] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.04)] shadow-[inset_0px_0px_0px_1px_rgba(253,253,255,0.04)] hover:bg-zinc-800",
        outline:
          "bg-transparent text-white outline outline-2 outline-offset-[-2px] outline-zinc-900 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.08)] shadow-[0px_1px_1px_-1px_rgba(0,0,0,0.12)] shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.12)] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.04)] shadow-[inset_0px_0px_0px_1px_rgba(253,253,255,0.04)] hover:bg-zinc-900/50",
      },
      size: {
        default: "h-10 w-10",
        sm: "h-8 w-8",
        lg: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

export { IconButton, iconButtonVariants };
