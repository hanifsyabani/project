"use client"
import { useEffect, useState } from "react"
import CardJurnal from "@/components/Card/CardJurnal";
interface JournalData  {
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

interface JournalProps {
    aggregation_type?: string; // Optional parameter to filter by ID
  }

  const Journal: React.FC<JournalProps> = ({ aggregation_type }) => {
    if (aggregation_type === "Artikel Jurnal") {
        aggregation_type = "Journal";
    }
    if (aggregation_type === "Prosiding Konferensi") {
        aggregation_type = "Conference Proceeding";
    }

    const [dataRes, setDataRes] = useState<JournalData[]>([]);
    const [filteredData, setFilteredData] = useState<JournalData[]>([]); 
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch("http://localhost:3000/api/journals");
        const data = await response.json();
        setDataRes(data.posts);
  
        if (aggregation_type) {
          const specificJournal = data.posts.filter((item: JournalData) => item.aggregation_type === aggregation_type);
          setFilteredData(specificJournal || null); 
        }
      }
      console.log(filteredData)
      fetchData();
    }, [aggregation_type]);
    
    return (
      <div className="flex flex-col min-h-screen justify-center items-center p-1">
        {aggregation_type && filteredData.length > 0 ? (
          <ul>
          {filteredData.map((journal) => (
            <li key={journal.id} className="mb-4">
              <div>
                <CardJurnal journal={journal}/>
              </div>
            </li>
          ))}
          </ul>
          // <div>
          //   <h1>{filteredData.aggregation_type}</h1>
          //   <p>{filteredData.title}</p>
          //   <p>{filteredData.affilname}</p>
          //   <p>{filteredData.eid}</p>
          //   <p>{filteredData.doi}</p>
          // </div>
        ) : (
            <div>
                <p>{aggregation_type} tidak ditemukan.</p>
            </div>
        )}
      </div>
    );
  };

export default Journal