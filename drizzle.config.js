//import * as dotenv from 'dotenv';
//dotenv.config();

export default {
	schema: './src/lib/db/schema',
	out: './drizzle',
	driver: 'pg',
	dbCredentials: {
		connectionString: "postgres://your_database_user:your_database_password@postgres:5432/your_database_name"
	}
};