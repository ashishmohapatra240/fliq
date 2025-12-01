"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Chip } from "@/components/ui/chip";

interface ChatInfoPanelProps {
  className?: string;
}

export function ChatInfoPanel({ className }: ChatInfoPanelProps) {
  return (
    <div className={cn("flex flex-col h-full border-l border-zinc-800 bg-background overflow-y-auto", className)}>
      <div className="p-6 space-y-8">
        <h2 className="text-lg font-semibold text-zinc-100">Info</h2>
        
        {/* Profile Section */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 rounded-xl overflow-hidden bg-zinc-800">
              <Image
                src="/images/creators/berry.png"
                alt="BERRY"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-zinc-100">BERRY🍀</h3>
              </div>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-3">
                Don't be afraid to start over again. This time, you're not starting from scratch...
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            <Chip>Football</Chip>
            <Chip>Hollywood</Chip>
            <Chip>Politics</Chip>
            <Chip>Crypto</Chip>
          </div>
        </div>

        {/* Data Overview */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-zinc-200">Data Overview</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-zinc-500">Markets Created</span>
              <span className="text-zinc-300">241</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500">Total Volume</span>
              <span className="text-zinc-300">$124k</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500">Last Campaign</span>
              <span className="text-zinc-300">04 Nov, 2025</span>
            </div>
          </div>
        </div>

        {/* Languages Preferred */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-zinc-200">Languages Preferred</h4>
          <p className="text-sm text-zinc-500">
            English • Spanish • German
          </p>
        </div>
      </div>
    </div>
  );
}

