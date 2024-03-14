"use client";
import { addBook, deleteBook } from "@/actions/FormAction";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";
import { home } from "@/actions/redirect";

export default function DeleteForm({ isbn }: { isbn: string }) {
  return (
    <>
      <div className="flex flex-col w-[500px] bg-[#292929] min-h-[200px] rounded-lg my-44 justify-center">
        <div className="flex justify-center">
          <h1 className="font-semibold">
            Apakah anda yakin ingin menghapus buku?
          </h1>
        </div>
        <div>
          <div className="flex py-3 justify-center gap-2">
            <button
              onClick={() => {
                home();
              }}
              className="bg-[#ff5858] px-3 py-1 rounded-md hover:bg-opacity-75 transition-all duration-300"
            >
              Gak jadi
            </button>
            <button
              onClick={async () => {
                try {
                  toast.info("Menghapus buku UwU")
                  await deleteBook(isbn);
                  toast.success("Buku Terhapus!");
                  home();
                } catch (err) {
                  toast.error("Buku Tidak Terhapus!");
                }
              }}
              className="bg-[#ff5858] px-3 outline outline-2 outline-[#ff5858] py-1 bg-opacity-0 rounded-md hover:bg-opacity-100 transition-all duration-300"
            >
              Hapus!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
