import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowLeftIcon, AlignJustify, X } from "lucide-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Group = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigateBack = () => {
    navigate('/');
  }
  const handleMobile = () => {
    setIsMobileMenuOpen(prev => !prev);
  }
  const handleMobileClose = () => setIsMobileMenuOpen(false);

  return (
    <div>
      <div className="flex h-screen relative">
        <div className={`absolute ${isMobileMenuOpen ? "top-0 left-0" : "left-[-100%]"}  h-screen w-full block sm:hidden bg-slate-700 z-40 transition-all duration-300`}>
          <X onClick={handleMobileClose} className="absolute top-5 right-5" />
          Group List
        </div>
        <div className="bg-gray-700 hidden sm:block sm:w-[36%]  lg:w-[25%]">Group List</div>
        <div className="p-4 w-full sm:w-[74%] lg:w-[75%]">
          <div className="flex items-center justify-between">
            <BackBtn navigateBack={navigateBack} />
            <AlignJustify onClick={handleMobile} className="p-1 size-8 rounded-full hover:bg-white/20 transition-colors duration-200 cursor-pointer block sm:hidden" />
          </div>
        </div>
      </div>
    </div>
  )
}

const BackBtn = ({ navigateBack }: { navigateBack: () => void }) => (<>
  <TooltipProvider delayDuration={300} skipDelayDuration={300}>
    <Tooltip>
      <TooltipTrigger>
        <ArrowLeftIcon 
          className="p-1 bg-green-500 size-8 rounded-full hover:bg-green-400 transition-colors duration-200" 
          onClick={navigateBack}/>
      </TooltipTrigger>
      <TooltipContent className="">Go back</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</>);

export default Group