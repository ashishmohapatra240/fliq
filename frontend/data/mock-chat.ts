import { Message, MessagePreview } from "@/types/chat";

export const MOCK_MESSAGES: MessagePreview[] = [
  {
    id: "1",
    name: "BERRY🍀",
    avatar: "/images/creators/berry.png",
    lastMessage: "go on guys",
    date: "Sep 22, 2025",
    unread: false,
    online: true,
  },
  {
    id: "2",
    name: "BERRY🍀",
    avatar: "/images/creators/berry.png",
    lastMessage: "new market is up 😋",
    date: "Sep 22, 2025",
    unread: true,
    online: true,
  },
];

export const MOCK_CHAT_MESSAGES: Message[] = [
  {
    id: "1",
    sender: "other",
    content: "new market is up 😋",
    type: "text",
    timestamp: "2:46 PM",
    avatar: "/images/creators/berry.png",
  },
  {
    id: "2",
    sender: "other",
    type: "market",
    timestamp: "2:46 PM",
    avatar: "/images/creators/berry.png",
    marketData: {
      title: "Will Elon Musk's wealth cross $500billion in 2025?",
      image: "/images/creators/berry.png",
      volume: "$124k",
      endsIn: "2hrs 48 mins",
      createdBy: "BERRY🍀",
      createdTime: "2d ago",
      type: "list",
      positions: [
        { name: "Ciprian Ciucu", value: "888%", side: "YES" },
        { name: "Ciprian Ciucu", value: "888%", side: "YES" },
      ],
    },
  },
  {
    id: "3",
    sender: "other",
    content: "go on guys",
    type: "text",
    timestamp: "2:46 PM",
    avatar: "/images/creators/berry.png",
  },
  {
    id: "4",
    sender: "me",
    content: "where is the link",
    type: "text",
    timestamp: "2:46 PM",
    avatar: "/images/creators/me.png",
  },
];

