import { Book } from "@/types/book.type";
import BookCard from "./components/BookCard";
import { getBooks } from "@/utils/api";

export default async function Home() {
  const books = await getBooks();

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
