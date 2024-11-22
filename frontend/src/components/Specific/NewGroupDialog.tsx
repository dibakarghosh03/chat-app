import TooltipComponent from "../Common/TooltipComponent";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { memo, useState } from "react";
import { Input } from "../ui/input";
import { sampleSearchData } from "@/constants/sampleData";
import UserItem from "../Common/UserItem";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

const NewGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState(sampleSearchData);
  const [seletedMembers, setSelectedMembers] = useState<string[]>([]);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openNewGroup = () => {
    console.log("New Group");
    setIsNewGroup((prev) => !prev);
  };

  const selectMemberHandler = (id: string) => {
    setSelectedMembers((prev) => 
      prev.includes(id) 
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };
  console.log(seletedMembers);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className="flex items-center">
        <TooltipComponent
          icon={<Plus size={26} />}
          hoverText="New Group"
          onClick={openNewGroup}
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[350px] border-gray-600 ">
        <DialogHeader>
          <DialogTitle className="text-center text-green-400">
            Create New Group
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative">
            <Input 
              className="border-gray-400" 
              placeholder="Group Name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </div>
          <div className="text-center font-semibold">Members</div>
          <div className="flex flex-col gap-y-2 max-h-[40vh] overflow-y-auto text-gray-300">
            {members.map((userItem) => (
              <UserItem 
                key={userItem._id} 
                user={userItem} 
                handler={selectMemberHandler} 
                isAdded={seletedMembers.includes(userItem._id)} 
              />
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button variant={"outline"}>Cancel</Button>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default memo(NewGroup);
