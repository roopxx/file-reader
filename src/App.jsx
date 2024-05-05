import NavBar from "./components/NavBar";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-7xl py-6">
        <FileUpload />
      </div>
    </>
  );
}

export default App;
