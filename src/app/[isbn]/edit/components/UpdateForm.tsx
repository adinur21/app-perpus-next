"use client";
import { Book } from "@/types/book.type";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Toaster, toast } from "sonner";
import { getBook } from "@/utils/api";
import { editBook } from "@/actions/FormAction";
import { redirect } from "next/navigation";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={
        pending
          ? "bg-[#6a6a6a] px-4 py-3 rounded-lg cursor-wait"
          : "bg-[#ef5c5c] hover:bg-opacity-85 px-4 py-3 rounded-lg"
      }
      aria-disabled={pending}
    >
      <span className="">Submit!</span>
    </button>
  );
}

export default function UpdateForm({ isbn }: { isbn: string }) {
  const [book, setBook] = useState<Book>();
  const [formState, FormAction] = useFormState(editBook, {
    message: "",
  });

  useEffect(() => {
    const init = async () => {
      const book = await getBook(isbn);
      setBook(book);
    };

    init();
  }, []);

  useEffect(() => {
    if (formState.message === "Success") {
      toast.success("Yayy!! berhasil mengupdate buku!");
      redirect("/")
    } else if (formState.message === "Failed") {
      toast.error("NOOOOO, Gagal mengupdate buku!");
    } else {
    }
  }, [formState.message]);

  return (
    <>
      <form action={FormAction} className="pt-10">
        <div className="flex items-center justify-center flex-col-reverse gap-4">
          <div className="flex flex-col-reverse items-center justify-center flex-wrap gap-4 order-1">
            <div className="order-4">
              <h1 className="font-medium">Nama Buku</h1>
              <input
                type="text"
                placeholder="ex: Petualangan ujang"
                className="form rounded-md p-2"
                name="title"
                defaultValue={book?.judul}
              />
            </div>
            <div className="order-3">
              <h1 className="font-medium">Author</h1>
              <input
                type="text"
                placeholder="ex: Kaka Milkita"
                className="form rounded-md p-2"
                name="author"
                defaultValue={book?.author}
              />
            </div>
            <div className="order-2">
              <h1 className="font-medium">Tahun Rilis</h1>
              <input
                type="text"
                placeholder="ex: 2069"
                className="form rounded-md p-2"
                name="year"
                defaultValue={book?.tahun_rilis}
              />
            </div>
            <input
              type="text"
              placeholder="ex: 2069"
              className="form rounded-md p-2 hidden"
              name="isbn"
              aria-hidden={true}
              value={isbn}
            />
          </div>
          <div>
            <SubmitButton />
          </div>
        </div>
      </form>
    </>
  );
}
