export default function SearchResultOutput({
  content,
  searchTerm,
  searchResults,
}) {
  const highlightResults = (text, term) => {
    const regex = new RegExp(`(${term})`, "gi");
    const parts = text.split(regex); // Split text into parts using regex
    return parts.map((part, index) => {
      if (part.match(regex)) {
        return (
          <span key={index} className="bg-yellow-300">
            {part}
          </span>
        ); // Highlight matches
      } else {
        return part; // Return non-matching parts as they are
      }
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Search Results</h2>
      <p>Total occurrences: {searchResults.length}</p>
      <div className="mt-4">
        <pre>{highlightResults(content, searchTerm)}</pre>
      </div>
    </div>
  );
}
