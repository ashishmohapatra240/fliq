"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SearchBar } from "@/components/ui/search-bar";
import { SectionTabs } from "@/components/ui/section-tabs";
import { MOCK_MESSAGES } from "@/data/mock-chat";

interface ChatSidebarProps {
  className?: string;
  onSelect?: (id: string) => void;
  selectedId?: string;
}

export function ChatSidebar({ className, onSelect, selectedId }: ChatSidebarProps) {
  const [activeTab, setActiveTab] = React.useState("All");

  return (
    <div className={cn("flex flex-col h-full border-r border-zinc-800 bg-background", className)}>
      <div className="p-4 space-y-4">
        <h2 className="text-lg font-semibold text-zinc-100">Messages</h2>
        <SearchBar className="w-full" />
      </div>
      
      <div className="px-0">
        <SectionTabs
          tabs={[
            { label: "All", active: activeTab === "All" },
            { label: "Starred (2)", active: activeTab === "Starred (2)" },
          ]}
          className="px-4"
          onTabClick={setActiveTab}
        />
      </div>

      <div className="flex-1 overflow-y-auto mt-2">
        <div className="space-y-1 px-2">
          {MOCK_MESSAGES.map((msg) => (
            <div
              key={msg.id}
              onClick={() => onSelect?.(msg.id)}
              className={cn(
                "flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors",
                selectedId === msg.id
                  ? "bg-zinc-800/50"
                  : "hover:bg-zinc-800/30"
              )}
            >
              <div className="relative">
                <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-zinc-800">
                  <Image
                    src={msg.avatar}
                    alt={msg.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {msg.online && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-primary-green border-2 border-background rounded-xl" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-zinc-200 truncate text-sm">
                    {msg.name}
                  </span>
                  <span className="text-xs text-zinc-500 whitespace-nowrap ml-2">
                    {msg.date}
                  </span>
                </div>
                <p className={cn(
                    "text-sm truncate mt-0.5",
                    msg.unread ? "text-zinc-100 font-medium" : "text-zinc-400"
                  )}
                >
                  {msg.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

