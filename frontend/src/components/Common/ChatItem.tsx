import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const generateHash = (input: string) => {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0; // Convert to 32-bit integer
  }
  console.log(Math.abs(hash));
  return Math.abs(hash);
};

const ChatItem = ({
  avatar = "",
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert = {
    count: 0,
    chatId: "",
  },
  index = 0,
  handleDeleteChat,
}: {
  avatar: string;
  name: string;
  _id: string;
  groupChat: boolean;
  sameSender: boolean;
  isOnline: boolean;
  newMessageAlert: {
    chatId?: string;
    count: number;
  } | undefined;
  index: number;
  handleDeleteChat: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    _id: string,
    groupChat: boolean
  ) => void;
}) => {
  
  const avatarColors = [
    "bg-[#1B1B2F]", "bg-[#2C3E50]", "bg-[#8B0000]", "bg-[#4A148C]", 
    "bg-[#D32F2F]", "bg-[#0277BD]", "bg-[#0288D1]", "bg-[#1976D2]", 
    "bg-[#388E3C]", "bg-[#8E24AA]"
  ];
  
  const colorIndex = useMemo(() => generateHash(_id) % avatarColors.length, [_id]); 
  const consistentColor = avatarColors[colorIndex];
  // const randomColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];

  return (
    <Link
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <div
        className={`flex gap-4 items-center p-4 ${
          sameSender ? "bg-black" : "bg-gray-400"
        } relative`}
      >
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback className={`${consistentColor}`}>
            {name.split(' ')[0].charAt(0)}{name.split(' ')[1].charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <div>{name}</div>
          {newMessageAlert.count > 0 && (
            <div>
              {newMessageAlert.count} New Message
              {newMessageAlert.count > 1 ? "s" : ""}
            </div>
          )}
        </div>
        {isOnline && <div>Online</div>}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
