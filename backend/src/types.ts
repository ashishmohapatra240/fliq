import { WebSocket } from "ws";

export interface MarketPosition {
  name: string;
  value: string;
  side: "YES" | "NO";
}

export interface MarketData {
  title: string;
  image: string;
  volume: string;
  endsIn: string;
  createdBy: string;
  createdTime: string;
  type: "list" | "binary";
  positions?: MarketPosition[];
}

export interface BaseMessage {
  id: string;
  sender: string;
  senderAvatar: string;
  timestamp: string;
}

export interface TextMessage extends BaseMessage {
  type: "text";
  content: string;
}

export interface MarketMessage extends BaseMessage {
  type: "market";
  marketData: MarketData;
}

export type ChatMessage = TextMessage | MarketMessage;

export interface ClientInfo {
  ws: WebSocket;
  id: string;
  name: string;
  avatar: string;
}