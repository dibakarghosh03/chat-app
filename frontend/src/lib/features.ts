
const fileFormat = (url: string) => {
    const fileExtension = url.split(".").pop();
    if(fileExtension === "mp4" || fileExtension === "webm" || fileExtension === "ogg") return "video";
    else if(fileExtension === "mp3" || fileExtension === "wav") return "audio";
    else if(fileExtension === "png" || fileExtension === "jpg" || fileExtension === "jpeg" || fileExtension === "gif") return "image";
    else return "file";
}

const transformImage = (url: string, width: number) => url;

export { fileFormat, transformImage };