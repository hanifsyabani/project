"use client";

import { PengajuanItem } from "@/utils/PengajuanItem";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { FC } from "react";

// Definisikan tipe props untuk komponen
interface SliderPengajuanProps {
  selectedPengajuan?: string;
  setSelectedPengajuan: (title: string) => void;
}

const HeaderPengajuan: FC<SliderPengajuanProps> = ({
  selectedPengajuan,
  setSelectedPengajuan,
}) => {
  return (
    <Swiper
      className="mySwiper"
      spaceBetween={10}
      slidesPerView={2}
      grabCursor={true}
      simulateTouch={true}
      touchRatio={1}
    >
      {PengajuanItem.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            className={`hover:bg-secondary text-tertiary hover:text-white p-2 rounded-lg cursor-pointer ${
              selectedPengajuan === item.title
                ? "bg-secondary text-white"
                : "bg-[#E7EAEE]"
            }`}
            onClick={() => setSelectedPengajuan(item.title)}
          >
            <h5 className="text-sm">{item.title}</h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeaderPengajuan;
