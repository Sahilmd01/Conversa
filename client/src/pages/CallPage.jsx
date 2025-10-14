import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { useQuery } from "@tanstack/react-query";
import { getStreamToken } from "../lib/api";
import { useThemeStore } from "../store/useThemeStore";
import { THEMES } from "../constants";

import {
  Channel,
  ChannelHeader,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";

import ChatLoader from "../components/ChatLoader";

import "stream-chat-react/dist/css/v2/index.css";
import "../styles/chatTheme.css";

const STREAM_API_KEY = import.meta.env.VITE_STREAM_API_KEY;

// ✅ Custom Header Component (Theme button removed)
const CustomChannelHeader = ({ onVideoCall }) => {
  return (
    <div className="str-chat__header" style={{ position: "relative" }}>
      <ChannelHeader />
      <div className="str-chat-header-actions">
        <button
          onClick={onVideoCall}
          className="video-call-btn"
          title="Start Video Call"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
          </svg>
          Call
        </button>
      </div>
    </div>
  );
};

const ChatPage = () => {
  const { id: targetUserId } = useParams();
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isThreadActive, setIsThreadActive] = useState(false);

  // Keep theme context for styling
  const { theme } = useThemeStore();

  const { authUser } = useAuthUser();

  const { data: tokenData } = useQuery({
    queryKey: ["streamToken"],
    queryFn: getStreamToken,
    enabled: !!authUser,
  });

  useEffect(() => {
    const initChat = async () => {
      if (!tokenData?.token || !authUser) return;

      try {
        const client = StreamChat.getInstance(STREAM_API_KEY);

        await client.connectUser(
          {
            id: authUser._id,
            name: authUser.fullName,
            image: authUser.profilePic,
          },
          tokenData.token
        );

        const channelId = [authUser._id, targetUserId].sort().join("-");
        const currChannel = client.channel("messaging", channelId, {
          members: [authUser._id, targetUserId],
        });

        await currChannel.watch();

        setChatClient(client);
        setChannel(currChannel);
      } catch (error) {
        console.error("Error initializing chat:", error);
        toast.error("Could not connect to chat. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    initChat();

    return () => {
      if (chatClient) {
        chatClient.disconnectUser();
      }
    };
  }, [tokenData, authUser, targetUserId]);

  const handleVideoCall = () => {
    if (channel) {
      const callUrl = `${window.location.origin}/call/${channel.id}`;
      channel.sendMessage({
        text: `🎥 I've started a video call. Join me here: ${callUrl}`,
      });
      toast.success("Video call link sent successfully!");

      // Optional: open call in new tab
      window.open(callUrl, "_blank", "noopener,noreferrer");
    }
  };

  if (loading || !chatClient || !channel) {
    return <ChatLoader />;
  }

  // Determine theme type for Stream Chat
  const isDarkTheme = [
    "dark",
    "synthwave",
    "halloween",
    "forest",
    "black",
    "luxury",
    "dracula",
    "business",
    "dim",
    "sunset",
    "night",
    "coffee",
  ].includes(theme);

  const streamTheme = isDarkTheme ? "str-chat__theme-dark" : "str-chat__theme-light";

  return (
    <div className={`h-[93vh] relative bg-base-100 overflow-hidden`}>
      <Chat client={chatClient} theme={streamTheme}>
        <Channel
          channel={channel}
          onThreadOpen={() => setIsThreadActive(true)}
          onThreadClose={() => setIsThreadActive(false)}
        >
          <div
            className={`h-full transition-all duration-300 ${
              isThreadActive ? "lg:mr-80" : ""
            }`}
          >
            <Window>
              <CustomChannelHeader onVideoCall={handleVideoCall} />
              <MessageList
                disableDateSeparator={false}
                messageActions={["edit", "delete", "react", "reply"]}
              />
              <MessageInput
                focus
                additionalTextareaProps={{
                  placeholder: "Type your message...",
                  rows: 1,
                }}
              />
            </Window>
          </div>

          <Thread />
        </Channel>
      </Chat>

      {/* Mobile Thread Overlay */}
      {isThreadActive && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsThreadActive(false)}
        />
      )}
    </div>
  );
};

export default ChatPage;
