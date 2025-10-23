/**
 * Data Fetching with "use cache"
 *
 * Next.js 16 introduces the "use cache" directive for automatic caching.
 * Add your data fetching functions here when you set up a database.
 *
 * Example:
 *
 * "use cache";
 * import { cacheTag } from "next/cache";
 * import { CACHE_TAGS } from "./cache-tags";
 *
 * export async function getUsers() {
 *   "use cache";
 *   cacheTag(CACHE_TAGS.users);
 *
 *   // Your data fetching logic
 *   const users = await fetch('/api/users').then(r => r.json());
 *   return users;
 * }
 */
