"use client";

import Image from "next/image";

import { FaLocationDot } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { BsSuitcaseLg } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import { useState } from "react";
import Overview from "@/components/Profile/Overview";
import PenelitianLuaran from "@/components/Profile/PenelitianLuaran/PenelitianLuaran";

export default function Home() {
  const [selectedString, setSelectedString] = useState<string>("overview");

  const renderContent = () => {
    switch (selectedString) {
      case "overview":
        return <Overview />;
      case "penelitianluaran":
        return <PenelitianLuaran />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="py-10 px-4">
      <div className="flex items-center gap-20 pl-20">
        <div className="bg-gray-300 w-60 h-80 rounded-xl"></div>
        <div>
          <h1 className="text-4xl mb-4 font-bold">Firdaus</h1>
          <div className="flex items-center gap-4 mb-3">
            <FaLocationDot size={25} className="text-tertiary" />
            <h1 className="text-tertiary text-lg">Fakultas Ilmu Komputer</h1>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <RiGraduationCapFill size={25} className="text-tertiary" />
            <h1 className="text-tertiary text-lg">S1- Sistem Komputer</h1>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <BsSuitcaseLg size={25} className="text-tertiary" />
            <h1 className="text-tertiary text-lg">Lektor</h1>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <FaAddressCard size={25} className="text-tertiary" />
            <h1 className="text-tertiary text-lg">1973817381738173</h1>
          </div>
        </div>
      </div>

      <div className="mt-10  mx-auto">
        <div className="flex justify-center items-center gap-4  ">
          <div
            className={`border border-tertiary rounded-lg text-center w-1/2 py-2 cursor-pointer hover:bg-secondary hover:text-white text-tertiary transition-all ${
              selectedString === "overview" 
                ? "bg-secondary text-white"
                : "border border-tertiary"
            }`}
            onClick={() => setSelectedString("overview")}
          >
            <h1 className="font-bold ">Overview</h1>
          </div>
          <div
            className={` rounded-lg text-center w-1/2 py-2 cursor-pointer hover:bg-secondary hover:text-white text-tertiary transition-all ${
              selectedString === "penelitianluaran"
                ? "bg-secondary text-white"
                : "border border-tertiary"
            }`}
            onClick={() => setSelectedString("penelitianluaran")}
          >
            <h1 className="font-bold ">Penelitian dan Luaran</h1>
          </div>
        </div>

        <div className="mt-4">{renderContent()}</div>
      </div>
    </div>
  );
}
