import AppLayout from "@/components/Layout/AppLayout";
import { Paperclip, Send } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sampleMessages } from "@/constants/sampleData";
import MessageContainer from "@/components/Common/MessageContainer";

const sampleUser = {
  _id: "1",
  name: "John Doe",
}

const Chat = () => {
  return (
    <div className="h-[90vh] w-[96%] mx-auto">
      <div className="h-[91%] w-full flex flex-col py-6 gap-y-6 overflow-y-auto">
        {/* Messages */}
        {sampleMessages?.map((message) => (
          <MessageContainer key={message._id} message={message} user={sampleUser} />
        ))}
      </div>
      <div className="w-full h-[9%] rounded-xl bg-white/5 px-4 flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Paperclip className="cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <input
          className="w-[95%] pl-3 bg-transparent h-full border-none outline-none focus:outline-none focus:ring-0"
          placeholder="Type a message"
        />
        <div className="bg-green-500 rounded-xl p-1 cursor-pointer hover:scale-110 active:scale-95 transition-all duration-200">
          <Send />
        </div>
      </div>
    </div>
  );
};

export default AppLayout()(Chat);
