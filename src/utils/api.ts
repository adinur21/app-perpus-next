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

export const getImage = async (key:string)=>{
  const image = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/image`, { method: "POST", headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },body: JSON.stringify({ "action": "getObject", key: `image/${key}` }) })
  return await image.json()
}

export const getBook = async (isbn:string) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/buku/${isbn}`);
  const getBook = (await data.json()) as Book;
  return getBook;
};
