"use client";

import { PengajuanItem } from "@/utils/PengajuanItem";
import KategoriProfil from "../../Kategori/KategoriProfil";
import CardJurnal from "../../Card/CardJurnal";
import { useState } from "react";
import PengajuanList from "./PengajuanData";

export default function PenelitianLuaran() {
  const [selectedPengajuan, setSelectedPengajuan] =
    useState<string>("Karya Ilmiah");

  const renderContent = () => {
    return <PengajuanList title={selectedPengajuan} />;
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
