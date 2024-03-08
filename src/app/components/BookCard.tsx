"use client";
import { Book } from "@/types/book.type";
import Image from "next/image";

export default function BookCard({ book }: { book: Book }) {
  return (
    <figure className="card bg-white flex flex-col rounded-lg text-center">
      <div className="w-full h-[300px]">
        <Image
          src={book.image}
          alt={`image_${book.judul}`}
          width={200}
          height={500}
          unoptimized
          className="overflow-hidden rounded-t-lg w-full h-full object-image"
        />
      </div>
      <div className="p-1 py-2">
        <h1 className="font-semibold">{book.judul}</h1>
        <h2 className="text-neutral-500">by {book.author}</h2>
        <p className="text-neutral-600 mb-4">{book.tahun_rilis}</p>
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
