import React from "react";
import ChatItem from "../Common/ChatItem";

const ChatList = ({
  chats = [{
      avatar: "",
      _id: "",
      name: "",
      groupChat: false,
      members: [""],
    }],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}: {
  chats: {
      avatar: string;
      _id: string;
      name: string;
      groupChat: boolean;
      members: string[];
    }[];
  chatId?: string;
  onlineUsers?: string[];
  newMessagesAlert: [
    {
      chatId?: string;
      count: number;
    }
  ];
  handleDeleteChat: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, _id: string, groupChat: boolean) => void;
}) => {
  return (
    <div>
      {chats?.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;
        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );
        const isOnline = members.some((member) => onlineUsers?.includes(_id));
        return (
          <ChatItem
            index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            key={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </div>
  );
};

export default ChatList;
