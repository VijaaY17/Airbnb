import { integer, pgTable, serial, uniqueIndex, varchar, uuid, foreignKey } from 'drizzle-orm/pg-core';

// User Schema
export const UserSchema = pgTable('User', {
  id: uuid("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email"),
  password: varchar("password").notNull()
});

// Place Schema
export const PlaceSchema = pgTable('Place', {
  id: uuid("id").primaryKey(), // Add id field as primary key for Place
  owner: uuid("owner").references(() => UserSchema.id), // Foreign key referencing UserSchema
  title: varchar("title").notNull(),
  address: varchar("address").notNull(),
  photos: varchar("photos[]").notNull(), // Use array type if necessary
  description: varchar("description").notNull(),
  perks: varchar("perks[]").notNull(), // Use array type for perks
  extraInfo: varchar("extraInfo"),
  checkIn: integer("checkIn").notNull(),
  checkOut: integer("checkOut").notNull(),
  maxGuests: integer("maxGuests").notNull(),
  price: integer("price").notNull()
});
