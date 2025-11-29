import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

export function Chip({ children, className }: ChipProps) {
  return (
    <div
      className={cn(
        "px-2 py-1.5 bg-zinc-800 rounded-md",
        "shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.08)]",
        "shadow-[0px_1px_1px_-1px_rgba(0,0,0,0.12)]",
        "shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.12)]",
        "shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.04)]",
        "shadow-[inset_0px_0px_0px_1px_rgba(253,253,255,0.04)]",
        "outline outline-1 outline-offset-[-1px] outline-zinc-800",
        "flex justify-start items-center gap-2.5",
        className
      )}
    >
      <div className="text-white text-xs font-medium font-mono line-clamp-3">
        {children}
      </div>
    </div>
  );
}

