import NewForm from "./components/NewForm"

export default function Tambahbuku() {
  return (
    <main className="pt-[6.5rem] px-28 flex-grow min-h-screen">
      <div className="py-5 p-6">
        <div>
          <h1 className="font-semibold text-5xl">Tambah Buku</h1>
        </div>
        <NewForm/>
      </div>
    </main>
  );
}
