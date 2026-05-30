import { numeric, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const movie = pgTable('movies', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  year: numeric('year'),
  description: text('description')
});