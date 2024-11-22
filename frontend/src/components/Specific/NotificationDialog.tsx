import { Bell } from "lucide-react";
import TooltipComponent from "../Common/TooltipComponent";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Notifications from "./Notifications";
import { useState } from "react";

const NotificationDialog = () => {
  const [isNotification, setIsNotification] = useState(false);
  const openNotification = () => {
    console.log("Notification");
    setIsNotification((prev) => !prev);
  };
  return (
    <Dialog>
      <DialogTrigger className="flex items-center">
        <TooltipComponent
          icon={<Bell size={26} />}
          hoverText="Notifications"
          onClick={openNotification}
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] min-h-[250px] border-gray-600">
        <DialogHeader>
          <DialogTitle className="text-center text-green-400">
            Notifications
          </DialogTitle>
        </DialogHeader>
        <Notifications />
      </DialogContent>
    </Dialog>
  );
};

export default NotificationDialog;
