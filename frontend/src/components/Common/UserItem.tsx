import { memo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserPlus, UserRoundX } from "lucide-react";
import { sampleSearchDataType } from "@/constants/sampleData";

const UserItem = ({
  user,
  handler,
  isAdded = false,
}: {
  user: sampleSearchDataType;
  handler?: (_id: string) => void;
  isAdded?: boolean;
}) => {
  return (
    <div className={`px-2 py-1 hover:bg-white/10 rounded-md transition-all duration-200 ${isAdded ? "bg-white/5" : ""}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={user?.avatar} />
            <AvatarFallback className="bg-[#2ECC71] font-semibold">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>{user.name}</div>
        </div>
        <div 
          onClick={() => {
            if(handler) {
              handler(user._id)
            }
          }}
        >
          {isAdded ? (
              <UserRoundX className="cursor-pointer hover:scale-125 active:scale-95 transition-all duration-200 text-red-300" />
            ) : (
              <UserPlus className="cursor-pointer hover:scale-125 active:scale-95 transition-all duration-200 text-green-300" />
            )}
        </div>
      </div>
    </div>
  );
};

export default memo(UserItem);
