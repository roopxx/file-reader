import { FaFileAlt } from "react-icons/fa";

export default function NavBar() {
  return (
    <>
      <nav className="bg-gray-800 py-3 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <FaFileAlt className="text-white text-2xl" />
          <h1 className="text-3xl text-white">File Reader</h1>
        </div>
      </nav>
    </>
  );
}
