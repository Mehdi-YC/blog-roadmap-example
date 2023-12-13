import { pgTable, bigint, varchar,text,timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('auth_user', {
	id:             varchar('id', {length: 15 }).primaryKey(),// change this when using custom user ids
	username:       varchar('username', {length: 55}),
	names:          varchar('names', { length: 255 }),
	lastNames:      varchar('last_names', { length: 255 })
});


export const session = pgTable('user_session', {
	id:             varchar('id', {length: 128}).primaryKey(),
	userId:         varchar('user_id', {length: 15}).notNull(),
	activeExpires:  bigint('active_expires', {mode: 'number'}).notNull(),
	idleExpires:    bigint('idle_expires', {mode: 'number'}).notNull()
});


export const key = pgTable('user_key', {
	id:             varchar('id', {length: 255}).primaryKey(),
	userId:         varchar('user_id', {length: 15}).notNull().references(() => user.id),
	hashedPassword: varchar('hashed_password', {length: 255})
});

export const blog = pgTable('blog', {
	id:             varchar('id', {length: 128}).primaryKey(),
	userId:         varchar('user_id', {length: 15}).notNull().references(() => user.id),
	title:      	varchar('title', { length: 255 }),
	slug:      		varchar('slug', { length: 255 }),
	imageUrl:    	varchar('image_url', {length: 255}),
	description:	text('description'),
	createdAt:      timestamp('created_at'),
	editedAt:       timestamp('edited_at')
});
// Note: PlanetScale does not support foreign keys, that's why the references() method is commented out.