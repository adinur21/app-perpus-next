import { Book } from "@/types/book.type";

export const getBooks = async () => {
  const data = await fetch(`${process.env.API_URI}/buku`, { method: "GET" });
  return (await data.json()) as Book[];
};

export const getBook = async (isbn:string) => {
  const data = await fetch(`${process.env.API_URI}/buku/${isbn}`, { method: "GET" });
  return (await data.json()) as Book;
};

// export const getImage = async () =>{
//   const image = 
// }