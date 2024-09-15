"use client";

import CardJurnal from "@/components/Card/CardJurnal";
import HeaderPengajuan from "@/components/Header/HeaderPengajuan";
import PengajuanList from "@/components/Profile/PenelitianLuaran/PengajuanData";
import { PengajuanItem } from "@/utils/PengajuanItem";
import { useState } from "react";
import { FaCalendarAlt, FaIdCard } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

export default function Pengajuan() {
  const [selectedPengajuan, setSelectedPengajuan] = useState<string>(
    "Publikasi Karya Ilmiah"
  );

  const [jenisPengajuan, setJenisPengajuan] = useState<string>("");

  const filteredItem = PengajuanItem.find(
    (item) => item.title === selectedPengajuan
  );

  // const renderContent= ()=>{
  //   return <PengajuanList title={selectedPengajuan} />
  // }
  return (
    <div className="px-4 py-10">
      <HeaderPengajuan
        setSelectedPengajuan={setSelectedPengajuan}
        selectedPengajuan={selectedPengajuan}
      />

      <div className="mt-5">
        <select
          name="jenisPengajuan"
          id="jenisPengajuan"
          className="border border-tertiary px-1 py-2 outline-none rounded-xl"
          onChange={(e) => setJenisPengajuan(e.target.value)}
        >
          <option value="#">Jenis Pengajuan</option>
          {filteredItem ? (
            filteredItem.item ? (
              filteredItem.item.map((subItem) => (
                <>
                  <option value={subItem.title}>{subItem.title}</option>
                </>
              ))
            ) : (
              <p>Tidak ada item.</p>
            )
          ) : null}
        </select>
      </div>
      <div className="mt-4">
        <div className="border-2 border-[#047857] rounded-lg py-2 font-bold text-[#047857] text-center">
          <h1>{jenisPengajuan}</h1>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <div className="w-[80%]">
              <h1 className="font-semibold">
                Skrining kanker serviks model otomatisasi lnspeksi visual asetat
                (OT/VA) berdasarkan biomarker, servikogram dan faktor risiko
                menggunakan pendekatan artificial intelligence
              </h1>
              <p className="text-sm">
                penulis, Dr. dr. Patiyus Agustiansyah, Sp.OG, Subsp. Onk, Prof
                Dr. dr. Laila Nuranna, Sp.OG, Subsp.Onk, Prof. Dr. Ir. Siti
                Nurmaini, MT Dr. dr. Irfannuddin, Sp.KO, M.Pd.Ked, Prof. Dr. dr.
                Yudi Mulyana, Sp.OG, Subsp. Onk [dan 2 lainya] ; editor, dr. M 
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt size={20} className="text-tertiary" />
                  <p>2024</p>
                </div>
                <div className="text-green-500 flex items-center gap-1">
                  <IoLocation size={20} />
                  <p>Palembang</p>
                </div>
                <div className="text-blue-500 flex items-center gap-1">
                  <FaIdCard size={20} />
                  <p>1973817381738173</p>
                </div>
              </div>
            </div>
            <button className="bg-[#047857] border border-white text-white hover:bg-white hover:text-[#047857] hover:border-[#047857] font-bold text-center px-3 py-2 rounded-lg  text-sm">
              Claim
            </button>
          </div>
        </div>
      </div>

      <hr className="border border-tertiary my-10" />

      <div>
        <h1 className="text-xl font-bold text-tertiary">
          Daftar dokumen yang diklaim
        </h1>
      </div>
    </div>
  );
}
