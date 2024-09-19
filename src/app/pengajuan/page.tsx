"use client";

import KategoriPengajuan from "@/components/Kategori/KategoriPengajuan";
import { KategoriPengajuanItem } from "@/utils/PengajuanItem";
import { useState } from "react";
import { FaCalendarAlt, FaIdCard } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

export default function Pengajuan() {
  const [selectedPengajuan, setSelectedPengajuan] = useState<string>(
    "Insentif Publikasi Karya Ilmiah yang terbit dalam Prosiding"
  );
  const [jenisPengajuan, setJenisPengajuan] = useState<string>("");
  const [currentJournal, setCurrentJournal] = useState<any>(null); // State untuk card yang dipilih
  const [claimedJournals, setClaimedJournals] = useState<any[]>([]); // State untuk jurnal yang diklaim

  const filteredItem = KategoriPengajuanItem.find(
    (item) => item.title === selectedPengajuan
  );

  const handleClaim = () => {
    if (currentJournal) {
      //artinya (duplicate, jurnalyangmauduplicate)
      setClaimedJournals([...claimedJournals, currentJournal]);
      // Reset state untuk card yang dipilih setelah klaim
      setCurrentJournal(null);
      setJenisPengajuan("");
    }
  };

  const handlePengajuanChange = (newPengajuan: string) => {
    setSelectedPengajuan(newPengajuan);
    // Reset pilihan jenis pengajuan dan card yang sedang dipilih
    setJenisPengajuan("");
    setCurrentJournal(null);
  };

  return (
    <div className="px-4 py-10">
      <KategoriPengajuan
        setSelectedPengajuan={handlePengajuanChange}
        selectedPengajuan={selectedPengajuan}
      />

      <div className="mt-5">
        {filteredItem ? (
          filteredItem.item && filteredItem.item.length < 2 ? (
            filteredItem.item.map((subItem) => (
              <div
                className="border-2 border-[#047857] rounded-lg py-2 font-bold text-[#047857] text-center"
                key={subItem.id}
              >
                <h1>{subItem.name}</h1>
              </div>
            ))
          ) : (
            <select
              name="jenisPengajuan"
              id="jenisPengajuan"
              className="border border-tertiary px-1 py-2 outline-none rounded-xl"
              onChange={(e) => {
                setJenisPengajuan(e.target.value);
                //ganti dengan data dari db
                setCurrentJournal({
                  title: e.target.value,
                  author:
                    "Dr. dr. Patiyus Agustiansyah, Sp.OG, Subsp. Onk, Prof Dr. dr. Laila Nuranna, Sp.OG, Subsp.Onk, dll",
                  year: "2024",
                  location: "Palembang",
                  id: "1973817381738173",
                });
              }}
              value={jenisPengajuan}
            >
              <option value="">Jenis Pengajuan</option>
              {filteredItem.item.map((subItem) => (
                <option value={subItem.name} key={subItem.id}>
                  {subItem.name}
                </option>
              ))}
            </select>
          )
        ) : null}
      </div>

      {currentJournal && (
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <div className="w-[80%]">
              <h1 className="font-semibold">
                Skrining kanker serviks model otomatisasi lnspeksi visual asetat
                (OT/VA) berdasarkan biomarker, servikogram dan faktor risiko
                menggunakan pendekatan artificial intelligence
              </h1>
              <p className="text-sm">
                penulis, Dr. dr. Patiyus Agustiansyah, Sp.OG, Subsp. Onk, Prof Dr. dr.
                Laila Nuranna, Sp.OG, Subsp.Onk, Prof. Dr. Ir. Siti Nurmaini, MT Dr. dr.
                Irfannuddin, Sp.KO, M.Pd.Ked, Prof. Dr. dr. Yudi Mulyana, Sp.OG, Subsp.
                Onk [dan 2 lainya] ; editor, dr. M
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt size={20} className="text-tertiary" />
                  <p>{currentJournal.year}</p>
                </div>
                <div className="text-green-500 flex items-center gap-1">
                  <IoLocation size={20} />
                  <p>{currentJournal.location}</p>
                </div>
                <div className="text-blue-500 flex items-center gap-1">
                  <FaIdCard size={20} />
                  <p>{currentJournal.id}</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleClaim}
              className="bg-[#047857] border border-white text-white hover:bg-white hover:text-[#047857] hover:border-[#047857] font-bold text-center px-3 py-2 rounded-lg text-sm"
            >
              Klaim
            </button>
          </div>
        </div>
      )}

      <hr className="border border-tertiary my-10" />

      <div>
        <h1 className="text-xl font-bold text-tertiary">
          Daftar dokumen yang diklaim
        </h1>
        {claimedJournals.length > 0 ? (
          <div className="mt-4">
            {claimedJournals.map((journal, index) => (
              <div
                key={index}
                className="border-2 border-[#047857] rounded-lg p-4 mb-4"
              >
                <h2 className="font-semibold">{journal.title}</h2>
                <p className="text-sm">{journal.author}</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt size={20} className="text-tertiary" />
                    <p>{journal.year}</p>
                  </div>
                  <div className="text-green-500 flex items-center gap-1">
                    <IoLocation size={20} />
                    <p>{journal.location}</p>
                  </div>
                  <div className="text-blue-500 flex items-center gap-1">
                    <FaIdCard size={20} />
                    <p>{journal.id}</p>
                  </div>
                </div>
              </div>
            ))}
            <button className="bg-[#047857] text-white font-bold px-4 py-2 rounded-lg">
              Submit Jurnal yang Diklaim
            </button>
          </div>
        ) : (
          <p className="mt-4 text-sm">Belum ada jurnal yang diklaim.</p>
        )}
      </div>
    </div>
  );
}
