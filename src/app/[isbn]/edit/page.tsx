import UpdateForm from "./components/UpdateForm"

export default function Tambahbuku({ params }: { params: { isbn: string } }) {
  return (
    <main className="pt-[6.5rem] px-28 flex-grow min-h-screen">
      <div className="py-5 p-6">
        <div>
          <h1 className="font-semibold text-5xl">Edit Buku</h1>
        </div>
        <UpdateForm isbn={params.isbn}/>
      </div>
    </main>
  );
}
