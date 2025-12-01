"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const SearchBar = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { className?: string }
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex-1 h-12 px-3 py-2.5 bg-zinc-900 rounded-xl shadow-[inset_0px_1px_4px_0px_rgba(255,255,255,0.01)] shadow-[inset_0px_0px_0px_1px_rgba(0,0,0,0.12)] inline-flex items-center gap-3.5 ",
        className
      )}
    >
      <HiMagnifyingGlass className="w-5 h-5 text-zinc-500 flex-shrink-0" />
      <input
        type="search"
        placeholder="Search"
        className={cn(
          "flex-1 bg-transparent border-none outline-none text-zinc-500 text-base font-medium leading-6 placeholder:text-zinc-500",
        )}
        ref={ref}
        {...props}
      />
    </div>  
  );
});
