import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";


const client = new pg.Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "drizzle-db",
});

 client.connect().then(()=>{
  console.log("DB Connected Successfully")
 })
 .catch((err)=> console.log(err))

const db = drizzle(client);

export default db
