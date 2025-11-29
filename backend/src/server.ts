import { WebSocketServer, WebSocket } from "ws";
import type {
  ClientInfo,
  ChatMessage,
  TextMessage,
  MarketMessage,
  MarketData,
} from "./types.js";

const clients = new Map<WebSocket, ClientInfo>();

function generateId(): string {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
}

const PORT = 8091;
const wss = new WebSocketServer({ port: PORT });

console.log(`WebSocket server running on ws://localhost:${PORT}`);

function broadcast(message: ChatMessage, excludeClient?: WebSocket): void {
  const messageStr = JSON.stringify(message);

  for (const [ws, _client] of clients) {
    if (ws !== excludeClient && ws.readyState === WebSocket.OPEN) {
      ws.send(messageStr);
    }
  }
}

wss.on("connection", (ws: WebSocket) => {
  const clientId = generateId();
  const clientInfo: ClientInfo = {
    ws,
    id: clientId,
    name: `User_${clientId.substring(0, 4)}`,
    avatar: "/images/creators/berry.png",
  };

  clients.set(ws, clientInfo);
  console.log(`Client connected: ${clientInfo.name} (${clientId})`);
  console.log(`Total clients: ${clients.size}`);

  ws.send(
    JSON.stringify({
      type: "welcome",
      clientId,
      name: clientInfo.name,
      avatar: clientInfo.avatar,
    })
  );

  ws.on("message", (data: Buffer) => {
    try {
      const rawMessage = JSON.parse(data.toString()) as {
        type: "text" | "market" | "set_identity";
        content?: string;
        marketData?: MarketData;
        name?: string;
        avatar?: string;
      };

      const client = clients.get(ws);
      if (!client) return;

      if (rawMessage.type === "set_identity") {
        if (rawMessage.name) client.name = rawMessage.name;
        if (rawMessage.avatar) client.avatar = rawMessage.avatar;
        console.log(`Client ${client.id} updated identity: ${client.name}`);
        return;
      }

      const timestamp = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      if (rawMessage.type === "text" && rawMessage.content) {
        const chatMessage: TextMessage = {
          id: generateId(),
          type: "text",
          sender: client.id,
          senderAvatar: client.avatar,
          content: rawMessage.content,
          timestamp,
        };

        ws.send(JSON.stringify(chatMessage));
        broadcast(chatMessage, ws);

        console.log(`[${client.name}]: ${rawMessage.content}`);
      } else if (rawMessage.type === "market" && rawMessage.marketData) {
        const chatMessage: MarketMessage = {
          id: generateId(),
          type: "market",
          sender: client.id,
          senderAvatar: client.avatar,
          marketData: rawMessage.marketData,
          timestamp,
        };

        ws.send(JSON.stringify(chatMessage));
        broadcast(chatMessage, ws);

        console.log(
          `[${client.name}] shared market: ${rawMessage.marketData.title}`
        );
      }
    } catch (err) {
      console.error("Failed to parse message:", err);
    }
  });

  ws.on("close", () => {
    const client = clients.get(ws);
    if (client) {
      console.log(`Client disconnected: ${client.name} (${client.id})`);
    }
    clients.delete(ws);
    console.log(`Total clients: ${clients.size}`);
  });

  ws.on("error", (err) => {
    console.error("WebSocket error:", err);
  });
});
