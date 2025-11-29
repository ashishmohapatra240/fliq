export interface MarketPosition {
  name: string;
  value: string;
  side: "YES" | "NO";
}

export interface MarketCardProps {
  title: string;
  image: string;
  volume: string;
  endsIn: string;
  createdBy: string;
  createdTime: string;
  type: "list" | "binary";
  positions?: MarketPosition[];
  className?: string;
}

