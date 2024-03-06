import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#fc5151] flex w-screen min-h-16 rounded-b-md justify-between fixed shadow-red-300">
      <div className="flex items-center justify-start">
        <div className="flex p-1">
          <Link href="/">
            <img className="w-24" src="/logo.png" />
          </Link>
        </div>
      </div>
      <div className="flex justify-end items-center pe-7">
        <div className="px-1">
          <Link className="flex" href="/">
            <div className="bg-[#b33939] border-black-2 bg-opacity-0 rounded-xl hover:bg-opacity-100 transition-all duration-500">
              <div className="px-3 py-5">
                <h1 className="font-semibold">Inventaris</h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="px-1">
          <Link className="flex" href="/tambahbuku">
            <div className="bg-[#b33939] border-black-2 bg-opacity-0 rounded-xl hover:bg-opacity-100 transition-all duration-500">
              <div className="px-3 py-5">
                <h1 className="font-semibold">Tambah Buku</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
