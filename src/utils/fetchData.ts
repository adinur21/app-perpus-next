import { Book } from "@/types/book.type";

export const getBooks = async () => {
  const data = await fetch(`${process.env.API_URI}/buku`, { method: "GET" });
  return (await data.json()) as Book[];
};
