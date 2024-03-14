"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { FormState } from "@/types/formState.type";
import { getBook } from "@/utils/api";
export async function addBook(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const isbn = formData.get("isbn") as string;
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const year = formData.get("year") as string;
  const cover = formData.get("cover") as File;
  const form = {
    isbn: isbn,
    judul: title,
    author: author,
    year: year,
    image: cover.name,
  };
  //   const filext = cover.type.split("/")[1]
  const image = {
    action: "putObject",
    key: `image/${cover.name}`,
  };
  try {
    const s3uplink = await axios.post(`${process.env.API_URI}/image`, image);
    const buffer = await cover.arrayBuffer();
    await axios.put(s3uplink.data, buffer);
    await axios.post(`${process.env.API_URI}/buku`, form);
    revalidatePath("/");
    return { message: "Success" };
  } catch (err) {
    console.log(err);
    return { message: "Failed" };
  }
}

export async function editBook(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const year = formData.get("year") as string;
  const isbn = formData.get("isbn") as string;
  const form = {
    judul: title,
    author: author,
    year: year,
  };
  try {
    await axios.put(`${process.env.API_URI}/buku/${isbn}`, form);
    revalidatePath("/");
    return { message: "Success" };
  } catch (err) {
    console.log(err);
    return { message: "Failed" };
  }
}

export async function deleteBook(isbn: string) {
  const book = await getBook(isbn);
  const image = {
    action: "deleteObject",
    key: `image/${book.image}`,
  };
  try {
    await axios.post(`${process.env.API_URI}/image`, image);
    await axios.delete(`${process.env.API_URI}/buku/${isbn}`);
    revalidatePath("/");
  } catch (err) {
    console.log(err);
  }
}
