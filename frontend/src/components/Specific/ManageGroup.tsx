import TooltipComponent from "../Common/TooltipComponent";
import { Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ManageGroup = () => {
  const navigate = useNavigate();
  const navigateToGroups = () => {
    navigate("/groups");
  };
  return (
    <TooltipComponent
      icon={<Users size={26} />}
      hoverText="Manage Groups"
      onClick={navigateToGroups}
    />
  );
};

export default ManageGroup;
