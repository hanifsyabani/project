import mysql from 'mysql2/promise';

// Create a pool of connections
const pool = mysql.createPool({
  host: 'localhost',        // Database host
  user: 'root',             // Database user
  password: '123456789', // Your database password
  database: 'db_journal',  // Your database name
  waitForConnections: true,
  connectionLimit: 10,      // Adjust based on your needs
  queueLimit: 0,
});


// interface Journal  {
//   id: number;
//   eid: string;
//   doi: string;
//   title: string;
//   affilname: string;
//   publicationName: string;
//   author_id: number;
// }


export default pool;