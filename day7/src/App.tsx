import { useEffect, useState } from "react";
import { BookCard } from "./components/BookCard";

function App() {
  const apiUrl = "https://anapioficeandfire.com/api/books";
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }
  // load books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  if (!books.length) {
    return (
      <div className="w-sreen flex h-screen items-center justify-center">
        <h2>Loading books...</h2>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4 bg-gray-100 p-8 text-gray-800">
      <h2 className="text-center text-2xl">The games of thrown books!</h2>
      {/* the fetch with a button method form the challenge, replaced with useEffect hooks to fetch on page load */}
      {/* <button
        className="rounded bg-teal-500 px-4 py-2 hover:bg-teal-400 active:bg-teal-300"
        type="button"
        onClick={fetchBooks}
      >
        Fetch da books
      </button> */}
      <div className="container relative mx-auto grid h-full gap-4 p-8 sm:grid-cols-2">
        {books.map((book, index) => (
          <BookCard book={book} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
