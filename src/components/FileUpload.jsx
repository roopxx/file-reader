import { useRef } from "react";
import { MdDriveFolderUpload } from "react-icons/md";

export default function FileUpload() {
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <h1 className="font-bold text-2xl">
        Upload your file to read its content.
      </h1>
      <button
        className="flex gap-4 items-center justify-center bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer"
        onClick={handleFileUpload}
      >
        <MdDriveFolderUpload className="text-white text-2xl" />
        Upload
      </button>
      <input className="hidden" ref={fileInputRef} type="file" id="file" />
    </>
  );
}
