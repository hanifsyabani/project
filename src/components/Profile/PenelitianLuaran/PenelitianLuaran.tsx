"use client";

import KategoriProfil from "../../Kategori/KategoriProfil";
import { useState } from "react";
import PenelitianLuaranData from "./PenelitianLuaranData";

export default function PenelitianLuaran() {
  const [selectedPengajuan, setSelectedPengajuan] =
    useState<string>("Karya Ilmiah");

  const renderContent = () => {
    return <PenelitianLuaranData title={selectedPengajuan} />;
  };

  return (
    <div className="">
      <KategoriProfil
        selectedPengajuan={selectedPengajuan}
        setSelectedPengajuan={setSelectedPengajuan}
      />

      <div className="mt-4">{renderContent()}</div>
    </div>
  );
}
