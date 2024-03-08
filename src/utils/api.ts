import { Book } from "@/types/book.type";

export const getBooks = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/buku`, { method: "GET" });
  return (await data.json()) as Book[];
};
