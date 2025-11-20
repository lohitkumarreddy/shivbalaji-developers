# Shivbalaji Developers — Starter

This is a ready-to-use starter website (Next.js + TypeScript + Tailwind) for Shivbalaji Developers.
It includes frontend pages, basic API routes, Prisma schema, seed script, and Dockerfile.

## Quick start (local)
1. Copy `.env.example` to `.env` and fill values.
2. Install dependencies: `npm install`
3. Run Prisma migrate & seed (if using Prisma): `npx prisma migrate dev --name init` and `npm run seed`
4. Run dev: `npm run dev`

## Notes
- This starter focuses on structure and basic functionality. Configure secrets, S3, and email providers before production.
