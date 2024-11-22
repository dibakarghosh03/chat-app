import Header from "./Header";
import Title from "../Common/Title";
import ChatList from "../Specific/ChatList";
import { sampleChats } from "@/constants/sampleData";
import React from "react";
import { useParams } from "react-router-dom";
import Profile from "../Specific/Profile";

const AppLayout = () => (WrapperComponent: any) => {

  const handleDeleteChat = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    _id: string,
    groupChat: boolean
  ) => {
    e.preventDefault();
    console.log("delete chat", _id, groupChat);
  };
  return (props: any) => {
    const params = useParams();
    const chatId = params.chatId;
    return (
      <>
        <Title />
        <Header />
        <div className="grid grid-cols-[1fr_2fr_1fr] h-[calc(100vh-4rem)]">
          <div className="border-r border-[#123c1d]">
            <ChatList
              chatId={chatId}
              chats={sampleChats}
              newMessagesAlert={[
                {
                  chatId: chatId,
                  count: 3
                }
              ]}
              handleDeleteChat={handleDeleteChat}
            />
          </div>
          <div>
            <WrapperComponent {...props} />
          </div>
          <div className="border-l border-[#123c1d]"><Profile /></div>
        </div>
      </>
    );
  };
};

export default AppLayout;
