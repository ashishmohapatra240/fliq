"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type {
  WsIncomingMessage,
  WsChatMessage,
  WsOutgoingMessage,
} from "@/types/chat";
import type { MarketCardProps } from "@/types/market";

const WS_URL = "ws://localhost:8080";

interface UseChatWebSocketReturn {
  messages: WsChatMessage[];
  clientId: string | null;
  isConnected: boolean;
  sendTextMessage: (content: string) => void;
  sendMarketMessage: (marketData: MarketCardProps) => void;
  setIdentity: (name: string, avatar?: string) => void;
}

export function useChatWebSocket(): UseChatWebSocketReturn {
  const [messages, setMessages] = useState<WsChatMessage[]>([]);
  const [clientId, setClientId] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {
      console.log("WebSocket connected");
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data) as WsIncomingMessage;

        if (message.type === "welcome") {
          setClientId(message.clientId);
          console.log(`Connected as ${message.name} (${message.clientId})`);
        } else if (message.type === "text" || message.type === "market") {
          setMessages((prev) => [...prev, message]);
        }
      } catch (err) {
        console.error("Failed to parse message:", err);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
      setIsConnected(false);
      wsRef.current = null;

      // Attempt reconnection after 3 seconds
      reconnectTimeoutRef.current = setTimeout(() => {
        console.log("Attempting to reconnect...");
        connect();
      }, 3000);
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    wsRef.current = ws;
  }, []);

  useEffect(() => {
    connect();

    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [connect]);

  const sendMessage = useCallback((message: WsOutgoingMessage) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(message));
    } else {
      console.warn("WebSocket not connected");
    }
  }, []);

  const sendTextMessage = useCallback(
    (content: string) => {
      if (content.trim()) {
        sendMessage({ type: "text", content: content.trim() });
      }
    },
    [sendMessage]
  );

  const sendMarketMessage = useCallback(
    (marketData: MarketCardProps) => {
      sendMessage({ type: "market", marketData });
    },
    [sendMessage]
  );

  const setIdentity = useCallback(
    (name: string, avatar?: string) => {
      sendMessage({ type: "set_identity", name, avatar });
    },
    [sendMessage]
  );

  return {
    messages,
    clientId,
    isConnected,
    sendTextMessage,
    sendMarketMessage,
    setIdentity,
  };
}

