import { useRef } from "react";
import { MdDriveFolderUpload } from "react-icons/md";

export default function FileUpload({ onUpload }) {
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file || !file.type.includes("text")) {
      alert("Please upload a text file.");
      onUpload(
        `This file format is not supported: ${file.type || "unknown file type"}.
        Please upload a text file and try again..`
      );
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      onUpload(e.target.result);
    };

    reader.readAsText(file);
  };

  return (
    <>
      <h1 className="font-bold text-2xl">
        Upload your file to read its content.
      </h1>
      <button
        className="flex gap-4 items-center justify-center bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer"
        onClick={() => fileInputRef.current.click()}
      >
        <MdDriveFolderUpload className="text-white text-2xl" />
        Upload
      </button>
      <input
        className="hidden"
        onChange={handleFileUpload}
        ref={fileInputRef}
        type="file"
        id="file"
      />
    </>
  );
}
