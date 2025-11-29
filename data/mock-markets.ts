import { MarketPosition, MarketCardProps } from "@/types/market";
import { TabItem } from "@/types/common";

export const TABS: TabItem[] = [
  { label: "Markets", active: true },
  { label: "Leaderboard", active: false },
  { label: "Campaigns", active: false },
  { label: "Discounts", active: false },
  { label: "Closed Markets", active: false },
];

export const MARKET_POSITIONS: MarketPosition[] = [
  { name: "Ciprian Ciucu", value: "888%", side: "YES" },
  { name: "Ciprian Ciucu", value: "888%", side: "NO" },
];

export const MARKET_DATA: MarketCardProps[] = [
  {
    title: "Will Elon Musk's wealth cross $500billion in 2025?",
    image: "https://placehold.co/48x48",
    volume: "$124k",
    endsIn: "2hrs 48 mins",
    createdBy: "Cyberwin",
    createdTime: "2d ago",
    type: "list",
    positions: MARKET_POSITIONS,
  },
  {
    title: "Will Elon Musk's wealth cross $500billion in 2025?",
    image: "https://placehold.co/48x48",
    volume: "$124k",
    endsIn: "2hrs 48 mins",
    createdBy: "Cyberwin",
    createdTime: "2d ago",
    type: "list",
    positions: MARKET_POSITIONS,
  },
  {
    title: "Will Elon Musk's wealth cross $500billion in 2025?",
    image: "https://placehold.co/48x48",
    volume: "$124k",
    endsIn: "2hrs 48 mins",
    createdBy: "Cyberwin",
    createdTime: "2d ago",
    type: "binary",
  },
  {
    title: "Will Elon Musk's wealth cross $500billion in 2025?",
    image: "https://placehold.co/48x48",
    volume: "$124k",
    endsIn: "2hrs 48 mins",
    createdBy: "Cyberwin",
    createdTime: "2d ago",
    type: "list",
    positions: MARKET_POSITIONS,
  },
];

