import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "footer" ADD COLUMN "social_links_instagram" varchar;
  ALTER TABLE "footer" ADD COLUMN "social_links_youtube" varchar;
  ALTER TABLE "footer" ADD COLUMN "social_links_github" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "footer" DROP COLUMN "social_links_instagram";
  ALTER TABLE "footer" DROP COLUMN "social_links_youtube";
  ALTER TABLE "footer" DROP COLUMN "social_links_github";`)
}
