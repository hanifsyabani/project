"use client";

import CardJurnal from "@/components/Card/CardJurnal";
import FormPengajuan from "@/components/Form/FormPengajuan";
import { KategoriPenelitianLuaranItem } from "@/utils/PengajuanItem";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { h1 } from "framer-motion/client";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";

export default function PenelitianLuaranData({ title }: { title: string }) {
  const filteredItem = KategoriPenelitianLuaranItem.find(
    (item) => item.title === title
  );

  console.log(filteredItem);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size] = useState("xl");

  return (
    <>
      <div>
        {filteredItem?.title === "Karya Ilmiah" ? (
          <>
            {filteredItem ? (
              <div>
                {filteredItem.item
                  ? filteredItem.item.map((subItem) => (
                      <div key={subItem.id} className="mb-6">
                        <h1 className="font-semibold text-2xl my-3">
                          {subItem.title}
                        </h1>
                        <div className="">
                          <CardJurnal />
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            ) : (
              <p>Data tidak ditemukan untuk judul {title}.</p>
            )}
          </>
        ) : (
          <>
            {filteredItem ? (
              <div>
                {filteredItem.item ? (
                  filteredItem.item.map((subItem) => (
                    <div key={subItem.id} className="mb-6">
                      <h1 className="font-semibold text-2xl my-3">
                        {subItem.title}
                      </h1>
                      <div className="">
                        <CardJurnal />
                      </div>
                    </div>
                  ))
                ) : (
                  <div
                    className="bg-[#047857] hover:bg-green-900 cursor-pointer transition-all text-white font-bold px-4 py-2 rounded-lg flex items-center justify-center w-1/4 mx-auto mt-20"
                    onClick={onOpen}
                  >
                    <IoAdd className="mr-2" size={25} />
                    <button className="">Tambahkan</button>
                  </div>
                )}
              </div>
            ) : (
              <p>Data tidak ditemukan untuk judul {title}.</p>
            )}
          </>
        )}
      </div>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{filteredItem?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormPengajuan item={filteredItem} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
