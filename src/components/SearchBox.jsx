import { useState } from "react";
import SearchResultOutput from "./SearchResultOutput";

export default function SearchBox({ content }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearch() {
    if (searchTerm === "") {
      setSearchResults(null);
      return;
    }
    const searchTermForRegex = searchTerm.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );
    const regex = new RegExp(`(${searchTermForRegex})`, "gi");
    const result = content.match(regex);
    setSearchResults(result || []);
    console.log(result);
  }

  return (
    <>
      <div className="mt-4 flex items-center ">
        <div className="flex gap-2">
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
        {searchResults && (
          <div className="flex-1 ml-4 text-center text-sm text-gray-700">
            <h2 className="text-xl font-bold mb-2">Search Results</h2>
            <p>Total occurrences: {searchResults.length}</p>
          </div>
        )}
      </div>
      <div className="mt-4">
        <h1 className="font-bold text-2xl">File content:</h1>
      </div>
      <SearchResultOutput content={content} searchTerm={searchTerm} />
    </>
  );
}
