"use client";

import {  FaNewspaper, FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarItem } from "@/utils/SidebarItem";

export default function Sidebar() {
  const pathname = usePathname();

  const renderIcon = (id: number) => {
    switch (id) {
      case 1:
        return <FaRegUserCircle size={25} />;
      case 2:
        return <FaNewspaper size={25} />;
    }
  };

  return (
    <>
      <div className="w-[20%] bg-primary h-screen fixed  overflow-y-auto">
        <div className="p-4 ">
          <h1 className="text-center text-white py-4 font-bold">
            Menu
          </h1>
        </div>
        <hr className="border-gray-300 border" />

        <div className="py-4 px-7">
          {SidebarItem.map((item) => (
            <Link href={`${item.link}`} key={item.id}>
              <div
                className={`flex items-center  gap-5 mb-4 text-white hover:bg-secondary p-2 rounded-lg cursor-pointer ${
                  pathname === item.link ? "bg-secondary" : ""
                }`}
              >
                {renderIcon(item.id)}

                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
