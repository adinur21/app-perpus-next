"use client";
import { addBook } from "@/actions/FormAction";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

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

export default function NewForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [formState, FormAction] = useFormState(addBook, {
    message: "",
  });
  useEffect(() => {
    if (formState.message === "Success") {
      toast.success("Yayy!! berhasil menambahkan buku!");
      ref.current?.reset();
    } else if (formState.message === "Failed") {
      toast.error("NOOOOO, Gagal menambahkan buku!");
    } else {
    }
  });
  return (
    <>
      <form action={FormAction} ref={ref} className="pt-10">
        <div className="flex items-center justify-center flex-col-reverse gap-4">
          <div className="flex flex-col-reverse items-center justify-center flex-wrap gap-4 order-1">
            <div className="order-4">
              <h1 className="font-medium">Nama Buku</h1>
              <input
                type="text"
                placeholder="ex: Petualangan ujang"
                className="form rounded-md p-2"
                name="title"
              />
            </div>
            <div className="order-3">
              <h1 className="font-medium">Author</h1>
              <input
                type="text"
                placeholder="ex: Kaka Milkita"
                className="form rounded-md p-2"
                name="author"
              />
            </div>
            <div className="order-2">
              <h1 className="font-medium">Tahun Rilis</h1>
              <input
                type="text"
                placeholder="ex: 2069"
                className="form rounded-md p-2"
                name="year"
              />
            </div>
            <div className="order-1">
              <h1 className="font-medium">ISBN</h1>
              <input
                type="text"
                placeholder="Ex: 9783161484100"
                className="form rounded-md p-2"
                name="isbn"
              />
            </div>
            <div className="order-0">
              <h1 className="font-medium">Cover buku</h1>
              <div className="">
                <input
                  type="file"
                  accept="image/*"
                  className="block text-sm text-gray-900 border border-white border-dashed dark:text-white focus:outline-none"
                  name="cover"
                />
              </div>
            </div>
          </div>
          <div>
            <SubmitButton />
          </div>
        </div>
      </form>
    </>
  );
}
