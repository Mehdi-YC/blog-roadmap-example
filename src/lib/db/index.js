import { connect } from 'pg';
import { DATABASE_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import * as schema from '$lib/db/schema';

export const connection = connect({
	url: DATABASE_URL
});

export const db = drizzle(connection, { schema });