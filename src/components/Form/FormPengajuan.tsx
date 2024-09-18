import { Input } from "@chakra-ui/react";

interface FormPengajuanProps {
  title: string;
  item?: any;
}

export default function FormPengajuan({ item }: { item?: FormPengajuanProps }) {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="judul" className="text-sm font-bold">
          Judul
        </label>
        <Input id="judul" name="judul" />
      </div>
      {item?.title !== "Buku" && (
        <div className="mb-3">
          <label htmlFor="judul" className="text-sm font-bold">
            Jenis
          </label>
          <Input id="jenis" name="jenis" />
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="judul" className="text-sm font-bold">
          Tanggal Terbit
        </label>
        <Input type="date" id="date" name="date" />
      </div>

      {item?.title !== "Buku"  && (
          <div className="mb-3">
            <label htmlFor="judul" className="text-sm font-bold">
              Link Dokumen
            </label>
            <Input id="linkdokumen" name="linkdokumen" />
          </div>
        )}

      {item?.title === "Buku" && (
        <>
          <div className="mb-3">
            <label htmlFor="judul" className="text-sm font-bold">
              Kategori
            </label>
            <Input id="kategori" name="kategori" />
          </div>
          <div className="mb-3">
            <label htmlFor="isbn" className="text-sm font-bold">
              ISBN
            </label>
            <Input id="isbn" name="isbn" />
          </div>
          <div className="mb-3">
            <label htmlFor="authors" className="text-sm font-bold">
              Authors
            </label>
            <Input id="authors" name="authors" />
          </div>
          <div className="mb-3">
            <label htmlFor="publisher" className="text-sm font-bold">
              Publisher
            </label>
            <Input id="publisher" name="publisher" />
          </div>
          <div className="mb-3">
            <label htmlFor="jumlahhalaman" className="text-sm font-bold">
              Jumlah Halaman
            </label>
            <Input id="jumlahhalaman" name="jumlahhalaman" />
          </div>
        </>
      )}

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto">Submit</button>
    </form>
  );
}
