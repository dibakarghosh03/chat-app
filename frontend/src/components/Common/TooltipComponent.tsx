import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const TooltipComponent = ({
    icon,
    hoverText,
    onClick,
  }: {
    icon: React.ReactNode;
    hoverText: string;
    onClick: () => void;
  }) => {
    return (
      <TooltipProvider delayDuration={200} skipDelayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <div onClick={onClick}>{icon}</div>
          </TooltipTrigger>
          <TooltipContent className="">{hoverText}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

export default TooltipComponent