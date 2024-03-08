export default function NewForm() {
  return (
    <>
      <form action="{}" className="pt-10" encType="multipart/form-data">
        <div className="flex items-center justify-center flex-col-reverse gap-4">
          <div className="flex flex-col-reverse items-center justify-center flex-wrap gap-4 order-1">
            <div className="order-4">
              <h1 className="font-medium">Nama Buku</h1>
              <input
                type="text"
                placeholder="ex: Petualangan ujang"
                className="form rounded-md p-2"
                name="name"
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
                name="ISBN"
              />
            </div>
            <div className="order-0">
              <h1 className="font-medium">Cover buku</h1>
              <div className="">
                <input type="file" className="block text-sm text-gray-900 border border-white border-dashed dark:text-white focus:outline-none" name="Cover" />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#ef5c5c] hover:bg-opacity-85 px-4 py-3 rounded-lg"
            >
              <span className="">Submit!</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
