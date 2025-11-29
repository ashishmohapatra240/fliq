import { cn } from "@/lib/utils";
import { TabItem } from "@/types/common";

interface SectionTabsProps {
  tabs: TabItem[];
  className?: string;
  onTabClick?: (label: string) => void;
}

export function SectionTabs({ tabs, className, onTabClick }: SectionTabsProps) {
  return (
    <div
      className={cn(
        "w-full overflow-x-auto no-scrollbar border-b border-zinc-800 inline-flex justify-start items-center gap-5 px-5",
        className
      )}
    >
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => onTabClick?.(tab.label)}
          className={cn(
            "px-3 py-2 flex justify-start items-center gap-2.5 whitespace-nowrap cursor-pointer transition-colors border-b-2",
            tab.active
              ? "border-white"
              : "border-transparent hover:border-zinc-700"
          )}
        >
          <div
            className={cn(
              "justify-start text-sm font-medium font-sans line-clamp-2",
              tab.active ? "text-white" : "text-neutral-500 hover:text-neutral-300"
            )}
          >
            {tab.label}
          </div>
        </div>
      ))}
    </div>
  );
}

