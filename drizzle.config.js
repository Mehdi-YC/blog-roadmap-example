//import * as dotenv from 'dotenv';
//dotenv.config();

export default {
	schema: './src/lib/db/schema',
	out: './drizzle',
	driver: 'pg',
	dbCredentials: {
		connectionString: "postgres://postgres:@localhost:5432/postgres"
	}
};