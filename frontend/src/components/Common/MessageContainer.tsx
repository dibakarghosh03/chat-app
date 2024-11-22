import { sampleMessagesType } from "@/constants/sampleData";
import { fileFormat } from "@/lib/features";
import moment from "moment";
import React from "react";
import RenderAttachment from "./RenderAttachment";

const MessageContainer = ({
  message,
  user,
}: {
  message: sampleMessagesType;
  user: { _id: string; name: string };
}) => {
  const { sender, content, attachments, createdAt } = message;
  const sameSender = sender._id === user._id;
  const timeAgo = moment(createdAt).fromNow();

  return (
    <div
      className={`${
        sameSender
          ? "self-end bg-gradient-to-r from-green-500 to-green-700 text-gray-400 shadow-green-200"
          : "self-start bg-[#212121] text-gray-200 shadow-gray-500"
      } text-white px-3 py-2 rounded-lg max-w-md shadow-sm text-lg`}
    >
      {!sameSender && (
        <div className="text-green-400 font-semibold text-xs">
          {sender.name}
        </div>
      )}
      <p className="mb-2">
        {content && content}
      </p>
      {/* Attachment */}
      {attachments.length > 0 && attachments.map((attachment, index) => {
        const url = attachment.url;
        const file = fileFormat(url);
        return <div key={index}>
            
            <div className="" >
                <RenderAttachment file={file} url={url} />
            </div>
        </div>
      })}
      <div className="text-end text-sm text-sky-100">{timeAgo}</div>
    </div>
  );
};

export default MessageContainer;
