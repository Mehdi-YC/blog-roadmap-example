import { Pool } from 'pg';
//import { DATABASE_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/node-postgres';
//import * as schema from '$lib/db/schema';


export const client = new Pool({
	connectionString: "postgres://your_database_user:your_database_password@postgres:5432/your_database_name"
});


export const db = drizzle(client);