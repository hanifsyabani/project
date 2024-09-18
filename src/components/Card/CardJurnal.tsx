import { FaCalendarAlt, FaIdCard } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

interface JournalInterface  {
  id: number;
  eid: string;
  doi: string;
  title: string;
  affilname: string;
  affiliation_city: string;
  affiliation_country: string;
  publication_name: string;
  author_id: number;
  cover_date: string;
  cover_display_date: string;
  aggregation_type: string;
  subtypeDescription: string;
}

export default function CardJurnal({journal} : {journal?: JournalInterface}) {
  return (
    <div>
      <h1 className="font-semibold">
        Skrining kanker serviks model otomatisasi lnspeksi visual asetat (OT/VA)
        berdasarkan biomarker, servikogram dan faktor risiko menggunakan
        pendekatan artificial intelligence
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
  );
}
