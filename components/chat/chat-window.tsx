"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { MarketCard } from "@/components/ui/market-card";
import { Button } from "@/components/ui/button";
import { MOCK_CHAT_MESSAGES } from "@/data/mock-chat";

interface ChatWindowProps {
  className?: string;
}

export function ChatWindow({ className }: ChatWindowProps) {
  return (
    <div className={cn("flex flex-col h-full bg-background", className)}>

      <div className="h-16 px-6 border-b border-zinc-800 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 rounded-full overflow-hidden bg-zinc-800">
            <Image
              src="/images/creators/berry.png"
              alt="BERRY"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-100">BERRY🍀</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {MOCK_CHAT_MESSAGES.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "flex gap-3 max-w-[85%]",
              msg.sender === "me" ? "ml-auto flex-row-reverse" : ""
            )}
          >
            {msg.sender === "other" && (
              <div className="relative h-8 w-8 flex-shrink-0 rounded-full overflow-hidden bg-zinc-800 self-start mt-1">
                <Image
                  src={msg.avatar || ""}
                  alt="User"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
            {msg.sender === "me" && (
              <div className="relative h-8 w-8 flex-shrink-0 rounded-full overflow-hidden bg-zinc-800 self-start mt-1">
                <Image
                  src="/images/creators/berry.png"
                  alt="Me"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}

            <div
              className={cn(
                "flex flex-col gap-1",
                msg.sender === "me" ? "items-end" : "items-start"
              )}
            >
              {msg.type === "text" ? (
                <div
                  className={cn(
                    "px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
                    msg.sender === "me"
                      ? "bg-zinc-800 text-zinc-100 rounded-tr-sm"
                      : "bg-zinc-900 text-zinc-300 rounded-tl-sm"
                  )}
                >
                  {msg.content}
                </div>
              ) : (
                <div className="w-full min-w-[300px] max-w-[400px]">
                  {msg.marketData && (
                    <MarketCard
                      {...msg.marketData}
                      className="bg-zinc-900 border-zinc-800"
                    />
                  )}
                </div>
              )}
              <span className="text-[10px] text-zinc-500 px-1">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-zinc-800 shrink-0">
        <div className="bg-zinc-900 p-2 rounded-xl flex items-center gap-2 relative">
          <input
            type="text"
            placeholder="Write a message"
            className="flex-1 bg-transparent border-none outline-none text-zinc-200 px-3 py-2 text-sm placeholder:text-zinc-500"
          />
          <Button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg h-9 px-4 text-sm font-medium">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
