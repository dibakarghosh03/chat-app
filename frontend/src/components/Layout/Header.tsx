import { LogOut, MenuIcon } from "lucide-react";
import { useState } from "react";
import NotificationDialog from "../Specific/NotificationDialog";
import TooltipComponent from "../Common/TooltipComponent";
import SearchDialog from "../Specific/SearchDialog";
import NewGroup from "../Specific/NewGroupDialog";
import ManageGroup from "../Specific/ManageGroup";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    console.log("Mobile");
    setIsMobile((prev) => !prev);
  };

  const logoutHandler = () => {
    console.log("Logout");
  };

  
  return (
    <>
      <div className="py-4 px-28 bg-gradient-to-r from-green-400 to-green-600 rounded-t-lg">
        <div className="flex justify-between items-center">
          <div className="text-white font-poppins text-2xl font-semibold">
            ChatFlow
          </div>
          <div>
            <MenuIcon
              size={24}
              className="block sm:hidden text-white"
              onClick={handleMobile}
            />
            <div className="flex items-center gap-x-10">
              <SearchDialog />
              <NewGroup />
              <ManageGroup />
              <NotificationDialog />
              <TooltipComponent
                icon={<LogOut size={26} />}
                hoverText="Logout"
                onClick={logoutHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Header;
