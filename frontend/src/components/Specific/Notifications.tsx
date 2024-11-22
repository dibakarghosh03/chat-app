import {
  sampleNotifications,
  sampleNotificationsType,
} from "@/constants/sampleData";
import { memo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Check, X } from 'lucide-react';

const Notifications = () => {
  return (
    <div className="flex flex-col gap-y-4 max-h-[40vh] overflow-y-auto">
      {sampleNotifications.length === 0 ? (
        <div className="text-center">No notifications</div>
      ) : (
        sampleNotifications.map((notification, index) => (
          <NotificationItem key={index} notification={notification} />
        ))
      )}
    </div>
  );
};

const NotificationItem = memo(
  ({ notification }: { notification: sampleNotificationsType }) => {
    return (
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={notification.sender.avatar} />
            <AvatarFallback>
              {notification.sender.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>{notification.sender.name} sent you a friend request.</div>
        </div>
        <div className="flex gap-2">
          <Button><Check/></Button>
          <Button variant={"destructive"}><X/></Button>
        </div>
      </div>
    );
  }
);

export default Notifications;
