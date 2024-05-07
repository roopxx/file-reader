import { useEffect, useState } from "react";
import SearchResultOutput from "./SearchResultOutput";

export default function SearchBox({ content }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    let hasFocus = false;
    const input = document.querySelector("#search-input");

    const handleKeyEvents = (e) => {
      switch (e.key) {
        case "Escape":
          setSearchTerm("");
          setSearchResults(null);
          break;
        case "s":
        case "S":
          if (!hasFocus) {
            e.preventDefault();
            input.focus();
            hasFocus = true;
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyEvents);
    window.addEventListener("click", () => {
      hasFocus = false;
    });

    return () => {
      window.removeEventListener("keydown", handleKeyEvents);
      window.removeEventListener("click", () => {
        hasFocus = false;
      });
    };
  }, []);

  function handleChange(e) {
    setSearchTerm(e.target.value);
    setSearchResults(null);
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

    if (searchTerm && !searchHistory.includes(searchTerm)) {
      const updatedHistory = [searchTerm, ...searchHistory.slice(0, 7)];
      setSearchHistory(updatedHistory);
    }
  }

  const handleSearchHistoryClick = (term) => {
    setSearchTerm(term);
    handleSearch();
  };

  return (
    <>
      <div className="mt-4 flex items-center justify-end">
        {searchResults && (
          <div className="flex-1 text-left text-sm text-gray-700">
            <h2 className="text-xl font-bold mb-2">Search Results:</h2>
            <p>
              The term{" "}
              <span className="bg-gray-200 px-2 py-1 rounded-lg font-bold text-gray-800">
                &quot;{searchTerm}&quot;
              </span>{" "}
              was found{" "}
              <span className="bg-gray-200 px-2 py-1 rounded-lg font-bold text-gray-800">
                {searchResults.length}
              </span>{" "}
              times in the file.
            </p>
          </div>
        )}
        <div className="flex gap-2">
          <input
            id="search-input"
            type="text"
            className="border-2 border-gray-300 outline-gray-700 bg-white h-10 px-5 pr-16 rounded-lg text-sm w-full"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
      <div className="search-history mt-2 flex flex-col items-end">
        {searchHistory.map((term, index) => (
          <span
            key={index}
            className="search-history-item cursor-pointer w-72 overflow-clip text-right tracking-wider text-sm text-gray-500 hover:text-black hover:font-bold"
            onClick={() => handleSearchHistoryClick(term)}
          >
            {term}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <h1 className="font-bold text-2xl">File content:</h1>
      </div>
      <SearchResultOutput content={content} searchTerm={searchTerm} />
    </>
  );
}
