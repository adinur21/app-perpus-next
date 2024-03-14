"use server";

import { redirect } from "next/navigation";

export const home = () => {
  redirect("/");
};

export const edit = (isbn: string) => {
  redirect(`/${isbn}/edit`);
};

export const del = (isbn: string) => {
  redirect(`/${isbn}/delete`);
};
