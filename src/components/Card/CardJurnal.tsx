import { FaCalendarAlt, FaIdCard } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import Journal from "@/app/journal";

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

export default function CardJurnal({ journal }: { journal: JournalInterface }) {
  return (
    <div className="transition ease-in-out hover:-translate-y-1 hover:scale-101 py-2">
      <h1 className="font-bold text-lg">
        {journal.publication_name}
      </h1>
      <h1 className="font-semibold">
        {journal.title}
      </h1>
      <p className="text-sm">
        
      </p>
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center gap-1">
          <FaCalendarAlt size={20} className="text-tertiary" />
          <p>{journal.cover_date}</p>
        </div>
        <div className="text-green-500 flex items-center gap-1">
          <IoLocation size={20} />
          <p>{journal.affiliation_city}, {journal.affiliation_country}</p>
        </div>
        <div className="text-blue-500 flex items-center gap-1">
          <FaIdCard size={20} />
          <p>EID: {journal.eid} DOI:  
            <a href={`https://doi.org/${journal.doi}`} className="underline">{journal.doi}</a> </p>
        </div>
      </div>
    </div>
  );
}
