import { useState } from "react";

export default function SearchBox({ content }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearch() {
    const regex = new RegExp(searchTerm, "gi");
    const result = content.match(regex);
    console.log(result);
  }

  return (
    <div className="mt-4 flex gap-2">
      <input
        type="text"
        className="border-2 border-gray-300 outline-gray-700 bg-white h-10 px-5 pr-16 rounded-lg text-sm"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
      >
        Search
      </button>
    </div>
  );
}
