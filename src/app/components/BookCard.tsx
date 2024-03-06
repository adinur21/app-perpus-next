import { Book } from "@/types/book.type";
import { stringifyDate } from "@/utils/utilityFunctions";
import Image from "next/image";

export default function BookCard({ book }: { book: Book }) {
  return (
    <figure className="card bg-white flex flex-col w-[15%] rounded-lg text-center">
      <div className="w-full h-[300px]">
        <Image
          src={book.cover}
          alt={`image_${book.title}`}
          width={200}
          height={500}
          unoptimized
          className="overflow-hidden rounded-t-lg w-full h-full object-cover"
        />
      </div>
      <div className="p-1 py-2">
        <h1 className="font-semibold">{book.title}</h1>
        <h2 className="text-neutral-500">by {book.author}</h2>
        <p className="text-neutral-600 mb-4">
          {stringifyDate(book.publishDate)}
        </p>
        <div className="flex flex-col-reverse items-center px-2 gap-2 justify-center">
          <button className="flex px-4 py-2 bg-[#ffab5d] order-1 text-white rounded-xl hover:bg-opacity-75 transition-all duration-300">
            Edit
          </button>
          <button className="flex px-4 py-2 bg-[#DA5555] order-0 text-white rounded-xl hover:bg-opacity-75 transition-all duration-300">
            Delete
          </button>
        </div>
      </div>
    </figure>
  );
}
