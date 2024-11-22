import { transformImage } from "@/lib/features";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";
import { Download, Play } from "lucide-react";

const RenderAttachment = ({ file, url }: { file: string; url: string }) => {
  switch (file) {
    case "video":
      return <Dialog>
      <DialogTrigger>
        <div className="bg-gray-600 rounded-md relative">
            <Play size={32} className="text-white bg-gray-800 rounded-md p-2 absolute top-0 left-0 translate-x-20 translate-y-8 hover:bg-gray-700 transition-colors duration-200 z-30" />
            <video
                src={url}
                preload="none"
                width={"200px"}
                className="rounded-md"
            />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:w-fit sm:max-h-[80vh]">
        <div className="p-4 flex justify-center items-center">
          <video src={url} autoPlay controls className="rounded-md max-h-[60vh]" />
        </div>
        <DialogFooter>
            <a
                href={url}
                target="__blank"
                className="flex items-center justify-center gap-2 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition-color duration-200"
            >
                <Download size={16} />
            </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>;
    case "image":
      return (
        <Dialog>
          <DialogTrigger>
            <img
              src={transformImage(url, 200)}
              alt="attachment"
              className="object-cover rounded-md"
              width={"200px"}
              height={"200px"}
            />
          </DialogTrigger>
          <DialogContent className="sm:min-w-[500px] sm:max-h-[80vh]">
            <div className="p-4">
              <img src={url} className="w-full object-cover rounded-md" />
            </div>
            <DialogFooter>
                <a
                    href={url}
                    target="__blank"
                    className="flex items-center justify-center gap-2 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition-color duration-200"
                >
                    <Download size={16} />
                </a>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    case "audio":
      return <audio src={url} preload="none" controls />;
    default:
      return <a href={url} target="__blank"></a>;
  }
};

export default RenderAttachment;
