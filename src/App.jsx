import NavBar from "./components/NavBar";
import FileUpload from "./components/FileUpload";
import { useState } from "react";

function App() {
  const [fileContent, setFileContent] = useState("");

  function handleFileUpload(content) {
    setFileContent(content);
  }

  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-7xl py-6">
        <FileUpload onUpload={handleFileUpload} />
        <div className="mt-4">
          <h1 className="font-bold text-2xl">File content:</h1>
          <p className="mt-4 whitespace-pre-wrap">{fileContent}</p>
        </div>
      </div>
    </>
  );
}

export default App;
