import { Search } from "lucide-react";
import TooltipComponent from "../Common/TooltipComponent";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
import { Input } from "../ui/input";
import { sampleSearchData } from "@/constants/sampleData";
import UserItem from "../Common/UserItem";

const SearchDialog = () => {
  const [isSearch, setIsSearch] = useState(false);
  const openSearch = () => {
    console.log("Search");
    setIsSearch((prev) => !prev);
  };
  return (
    <Dialog>
      <DialogTrigger className="flex items-center">
        <TooltipComponent
          icon={<Search size={26} />}
          hoverText="Search"
          onClick={openSearch}
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[350px] border-gray-600 ">
        <DialogHeader>
          <DialogTitle className="text-center text-green-400">
            Find People
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative">
            <Input className="border-gray-400" />
            <Search size={22} className="absolute right-1 top-[19%]" />
          </div>
          <div className="flex flex-col gap-y-2 mt-4 max-h-[40vh] overflow-y-auto">
            {sampleSearchData.map((userItem) => (
              <UserItem key={userItem._id} user={userItem} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
