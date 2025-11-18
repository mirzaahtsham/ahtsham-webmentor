import { PrismaClient } from "@prisma/client";

declare global {
  // allow globalThis.prisma for dev hot reload
  // avoids "Element implicitly has an 'any' type" error
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  globalThis.prisma ||
  new PrismaClient({
    log: ["query"], // optional, logs queries
  });

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
