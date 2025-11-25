import "server-only";

/**
 * Database Queries
 *
 * Centralized location for all database queries.
 * Add your queries here when you set up a database.
 *
 * Example:
 * import { db } from "@/lib/db";
 * import { eq } from "drizzle-orm";
 * import { users } from "./schema";
 *
 * export async function getUserById(id: string) {
 *   const [user] = await db
 *     .select()
 *     .from(users)
 *     .where(eq(users.id, id))
 *     .limit(1);
 *   return user;
 * }
 */
