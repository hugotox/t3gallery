import { auth } from "@clerk/nextjs/server";
import { and, desc, eq } from "drizzle-orm";
import "server-only";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

export async function getImages() {
  const user = auth();
  if (!user.userId) {
    throw new Error("Unauthorized");
  }
  const imageList = await db.query.images.findMany({
    where: eq(images.userId, user.userId),
    orderBy: desc(images.name),
  });
  return imageList;
}

export async function getImage(id: number) {
  const user = auth();
  if (!user.userId) {
    throw new Error("Unauthorized");
  }
  const image = await db.query.images.findFirst({
    where: and(eq(images.id, id), eq(images.userId, user.userId)),
  });
  if (!image) {
    throw new Error("Not found");
  }
  return image;
}
