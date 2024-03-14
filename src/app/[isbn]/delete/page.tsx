import DeleteForm from "./components/DeleteDialog";

export default function Tambahbuku({ params }: { params: { isbn: string } }) {
  return (
    <main className="pt-[6.5rem] px-28 min-h-screen">
      <div className="py-5 p-6">
        <div>
          <h1 className="font-semibold text-5xl">Delete Buku</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <DeleteForm isbn={params.isbn}/>
      </div>
    </main>
  );
}
