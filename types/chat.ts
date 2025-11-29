import { MarketCardProps } from "./market";

export interface MessagePreview {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  date: string;
  unread?: boolean;
  online?: boolean;
}

export interface Message {
  id: string;
  sender: "me" | "other";
  content?: string;
  type: "text" | "market";
  timestamp: string;
  avatar?: string;
  marketData?: MarketCardProps;
}

