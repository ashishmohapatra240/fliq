"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChatSidebar } from "./chat-sidebar";
import { ChatWindow } from "./chat-window";
import { ChatInfoPanel } from "./chat-info-panel";

interface ChatLayoutProps {
  className?: string;
}

export function ChatLayout({ className }: ChatLayoutProps) {
  const [selectedId, setSelectedId] = React.useState("1");

  return (
    <div
      className={cn(
        "flex w-full bg-background overflow-hidden border-t border-zinc-800",
        "h-[calc(100vh-85px)]",
        className
      )}
    >
      <ChatSidebar
        className="w-80 hidden md:flex flex-shrink-0"
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      <ChatWindow className="flex-1 min-w-0" />
      <ChatInfoPanel className="w-80 hidden xl:flex flex-shrink-0" />
    </div>
  );
}
