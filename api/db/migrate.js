// import { migrate } from 'drizzle-orm/mysql2/migrator';
// import db from './db_connect.js';


// async function migration (){
//   await migrate(db, { migrationsFolder: './drizzle' });
//   process.exit(0)

// }
import { migrate } from 'drizzle-orm/mysql2/migrator';
import db from './db_connect.js';

async function migration() {
  try {
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('Migrations applied successfully.');
  } catch (error) {
    console.error('Error applying migrations:', error);
  } finally {
    process.exit(0);
  }
}

migration();

