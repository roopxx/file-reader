import NavBar from "./components/NavBar";
import FileUpload from "./components/FileUpload";
import { useState } from "react";
import SearchBox from "./components/SearchBox";
import Footer from "./components/Footer";

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
        <hr className="border border-black mt-4" />
        <SearchBox content={fileContent} />
      </div>
      <Footer />
    </>
  );
}

export default App;
