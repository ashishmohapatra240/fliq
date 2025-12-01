"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MarketCard } from "@/components/ui/market-card";
import { Button } from "@/components/ui/button";
import { useChatWebSocket } from "@/hooks/useChatWebsocket";
import { HiOutlineShare } from "react-icons/hi";
import { MARKET_DATA } from "@/data/mock-markets";
import { IconButton } from "../ui/icon-button";

interface ChatWindowProps {
  className?: string;
}

export function ChatWindow({ className }: ChatWindowProps) {
  const {
    messages,
    clientId,
    isConnected,
    sendTextMessage,
    sendMarketMessage,
  } = useChatWebSocket();
  const [inputValue, setInputValue] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const prevMessagesLengthRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || messages.length === 0) return;

    const isNewMessage = messages.length > prevMessagesLengthRef.current;
    prevMessagesLengthRef.current = messages.length;

    if (!isNewMessage) return;

    requestAnimationFrame(() => {
      const { scrollHeight, scrollTop, clientHeight } = container;
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

      if (distanceFromBottom < 150) {
        container.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        });
      }
    });
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      sendTextMessage(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleShareMarket = () => {
    const randomMarket =
      MARKET_DATA[Math.floor(Math.random() * MARKET_DATA.length)];
    if (randomMarket) {
      sendMarketMessage(randomMarket);
    }
  };

  return (
    <div className={cn("flex flex-col h-full bg-background", className)}>
      <div className="h-16 px-6 border-b border-zinc-800 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 rounded-full overflow-hidden bg-zinc-800 flex items-center justify-center">
            <Image
              src="/images/creators/berry.png"
              alt="BERRY"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-100 tracking-wider">
              BERRY🍀
            </span>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full text-zinc-500 text-sm">
            No messages yet. Start the conversation!
          </div>
        )}
        {messages.map((msg) => {
          const isMe = msg.sender === clientId;
          return (
            <div
              key={msg.id}
              className={cn(
                "flex gap-3 max-w-[85%]",
                isMe ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div className="relative h-8 w-8 flex-shrink-0 rounded-full overflow-hidden bg-zinc-800 self-start mt-1">
                <Image
                  src={msg.senderAvatar || "/images/creators/berry.png"}
                  alt="User"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div
                className={cn(
                  "flex flex-col gap-1",
                  isMe ? "items-end" : "items-start"
                )}
              >
                {msg.type === "text" ? (
                  <div
                    className={cn(
                      "px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
                      isMe
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
          );
        })}
      </div>

      <div className="p-4 border-t border-zinc-800 shrink-0">
        <div className="bg-zinc-900 p-2 rounded-xl flex items-center gap-2 relative">
          <input
            type="text"
            placeholder={isConnected ? "Write a message" : "Connecting..."}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={!isConnected}
            className="flex-1 bg-transparent border-none outline-none text-zinc-200 px-3 py-2 text-sm placeholder:text-zinc-500 disabled:opacity-50"
          />
          <IconButton
            size="sm"
            variant="default"
            onClick={handleShareMarket}
            disabled={!isConnected}
            title="Share a market"
          >
            <HiOutlineShare className="h-4 w-4" />
          </IconButton>
          <Button
            onClick={handleSend}
            disabled={!isConnected || !inputValue.trim()}
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg h-9 px-4 text-sm font-medium disabled:opacity-50"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
