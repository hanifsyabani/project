import CardJurnal from "@/components/Card/CardJurnal";
import { PengajuanItem } from "@/utils/PengajuanItem";

export default function PengajuanList({ title }: { title: string }) {
  const filteredItem = PengajuanItem.find((item) => item.title === title);
  return (
    <div>
      {filteredItem ? (
        <div className="">
          {filteredItem.item ? (
            filteredItem.item.map((subItem) => (
              <div key={subItem.id} className="mb-6">
                <h1 className="font-semibold text-2xl my-3">{subItem.title}</h1>
                <div className="" >
                  <CardJurnal />
                </div>
              </div>
            ))
          ) : (
            <p>Tidak ada item.</p>
          )}
        </div>
      ) : (
        <p>Data tidak ditemukan untuk judul "{title}".</p>
      )}
    </div>
  );
}
