"use client";

import { PengajuanItem } from "@/utils/PengajuanItem";
import HeaderPengajuan from "../../Header/HeaderPengajuan";
import CardJurnal from "../../Card/CardJurnal";
import { useState } from "react";
import PengajuanList from "./PengajuanData"; // bypass ini dengan Journal
import Journal from "@/app/journal";


export default function PenelitianLuaran() {
  const [selectedPengajuan, setSelectedPengajuan] = useState<string>(
    "Journal"
  );

  const renderContent = () => {
    console.log(selectedPengajuan);
    return <Journal aggregation_type={selectedPengajuan} />;
  };

  return (
    <div className="">
      <HeaderPengajuan
        selectedPengajuan={selectedPengajuan}
        setSelectedPengajuan={setSelectedPengajuan}
      />

      <div className="mt-4">{renderContent()}</div>
    </div>
  );
}
