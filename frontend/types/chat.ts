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

export interface WsWelcomeMessage {
  type: "welcome";
  clientId: string;
  name: string;
  avatar: string;
}

export interface WsTextMessage {
  id: string;
  type: "text";
  sender: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
}

export interface WsMarketMessage {
  id: string;
  type: "market";
  sender: string;
  senderAvatar: string;
  marketData: MarketCardProps;
  timestamp: string;
}

export type WsChatMessage = WsTextMessage | WsMarketMessage;

export type WsIncomingMessage = WsWelcomeMessage | WsChatMessage;

export interface WsSendTextMessage {
  type: "text";
  content: string;
}

export interface WsSendMarketMessage {
  type: "market";
  marketData: MarketCardProps;
}

export interface WsSetIdentityMessage {
  type: "set_identity";
  name?: string;
  avatar?: string;
}

export type WsOutgoingMessage = WsSendTextMessage | WsSendMarketMessage | WsSetIdentityMessage;
