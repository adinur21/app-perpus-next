"use client";
import { Book } from "@/types/book.type";
import { useEffect, useState } from "react";
import BookCard from "./components/BookCard";
import { getBooks } from "@/utils/api";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const init = async () => {
      const books = await getBooks();
      setBooks(books);
    };

    init();
  }, []);

  return (
    <main className="pt-[6.5rem] px-28 flex-grow min-h-screen">
      <div className="py-5 p-6">
        <h1 className="font-semibold text-5xl">List Inventaris Buku</h1>
      </div>
      <div className="flex items-center py-2 pb-5 justify-center flex-wrap gap-6">
        {books.map((book: Book) => (
          <BookCard key={book.isbn} book={book} />
        ))}
      </div>
    </main>
  );
}
