export default function SearchResultOutput({ content, searchTerm }) {
  const highlightResults = (text, term) => {
    if (!term) {
      return text;
    }

    const searchTermForRegex = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${searchTermForRegex})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) => {
      if (part.match(regex)) {
        return (
          <span key={index} className="bg-yellow-300">
            {part}
          </span>
        );
      } else {
        return part;
      }
    });
  };

  return (
    <div>
      <div className="mt-4">
        <pre className="whitespace-pre-line">
          {highlightResults(content, searchTerm)}
        </pre>
      </div>
    </div>
  );
}
