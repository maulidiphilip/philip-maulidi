import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Force create a new Prisma client instance to ensure latest schema
export const prisma = new PrismaClient();

// Only cache in development after ensuring we have the latest client
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}