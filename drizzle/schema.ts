import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * File storage table for managing taxi photos and documents.
 * Stores metadata about files uploaded to S3.
 */
export const files = mysqlTable("files", {
  id: int("id").autoincrement().primaryKey(),
  /** S3 file key for retrieving the file */
  fileKey: varchar("fileKey", { length: 512 }).notNull().unique(),
  /** Public URL to the file */
  url: text("url").notNull(),
  /** Original filename provided by user */
  filename: varchar("filename", { length: 255 }).notNull(),
  /** MIME type of the file */
  mimeType: varchar("mimeType", { length: 100 }).notNull(),
  /** File size in bytes */
  fileSize: int("fileSize").notNull(),
  /** File category: photo, document, etc. */
  category: mysqlEnum("category", ["photo", "document", "other"]).default("other").notNull(),
  /** Description or title of the file */
  description: text("description"),
  /** User who uploaded the file */
  uploadedBy: int("uploadedBy").notNull(),
  /** Timestamp when file was uploaded */
  uploadedAt: timestamp("uploadedAt").defaultNow().notNull(),
  /** Soft delete: timestamp when file was deleted (null if not deleted) */
  deletedAt: timestamp("deletedAt"),
});

export type File = typeof files.$inferSelect;
export type InsertFile = typeof files.$inferInsert;