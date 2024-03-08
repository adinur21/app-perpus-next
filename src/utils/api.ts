import { Book } from "@/types/book.type";

export const getBooks = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/buku`);
  const getBooks = (await data.json()) as Book[];
  return getBooks;
};

export const createBook = async (book: Book) => {
  const create = await fetch(`${process.env.API_URI}/buku`, {
    method: "POST",
    body: JSON.stringify(book),
  });
  return create.ok;
};
