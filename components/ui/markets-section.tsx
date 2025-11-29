"use client";
import { MarketCard } from "@/components/ui/market-card";
import { MarketCardProps } from "@/types/market";
import { SectionTabs } from "@/components/ui/section-tabs";
import { TabItem } from "@/types/common";

interface MarketsSectionProps {
  tabs: TabItem[];
  markets: MarketCardProps[];
}

export function MarketsSection({ tabs, markets }: MarketsSectionProps) {
  return (
    <main className="flex-1 flex flex-col gap-6">
      <SectionTabs tabs={tabs} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {markets.map((market, index) => (
          <MarketCard key={index} {...market} />
        ))}
      </div>
    </main>
  );
}

