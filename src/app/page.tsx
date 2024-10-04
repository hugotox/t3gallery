import { desc } from "drizzle-orm";
import Link from "next/link";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const imageList = await db.query.images.findMany({
    orderBy: desc(images.name),
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-3">
        {imageList.map((image) => (
          <div
            key={image.id}
            className="flex h-32 w-32 flex-col gap-1 rounded-sm bg-slate-200 p-2"
          >
            <img
              src={image.url}
              alt={image.name}
              className="h-20 object-contain"
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
