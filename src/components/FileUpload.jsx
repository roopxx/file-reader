import { useEffect, useRef, useState } from "react";
import { MdDriveFolderUpload } from "react-icons/md";
import propTypes from "prop-types";

export default function FileUpload({ onUpload }) {
  const [fileDetail, setFileDetail] = useState();
  const fileInputRef = useRef(null);

  useEffect(() => {
    let hasFileUpload = false;

    const handleKeyEvents = (e) => {
      switch (e.key) {
        case "Insert":
          if (!hasFileUpload) {
            fileInputRef.current.click();
            hasFileUpload = true;
          }
          break;
        case "Delete":
          setFileDetail(null);
          onUpload("");
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyEvents);

    return () => {
      window.removeEventListener("keydown", handleKeyEvents);
    };
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file || !file.type.includes("text")) {
      alert("Please upload a text file.");
      onUpload(
        `This file format is not supported: ${
          file?.type || "unknown file type"
        }.
        Please upload a text file and try again..`
      );
      setFileDetail(null);
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      setFileDetail({
        name: file.name,
        wordCount: e.target.result.split(" ").length,
      });
      onUpload(e.target.result);
    };

    reader.readAsText(file);
  };

  return (
    <>
      <div className="bg-white p-4 rounded shadow-md shadow-gray-400">
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
        {fileDetail && (
          <div className="border-4 border-double mt-4 pt-4 border-gray-500 bg-blue-50 p-4 w-fit">
            <p>File name : {fileDetail?.name}</p>
            <p>File word count : {fileDetail?.wordCount}</p>
          </div>
        )}
      </div>
    </>
  );
}

FileUpload.propTypes = {
  onUpload: propTypes.func.isRequired,
};
