import { SignedIn, SignedOut } from "@clerk/nextjs";
import { desc } from "drizzle-orm";
import Link from "next/link";
import { db } from "~/server/db";
import { images, type SelectImages } from "~/server/db/schema";

export const dynamic = "force-dynamic";

function Images({ imageList }: { imageList: SelectImages[] }) {
  return (
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
  );
}

export default async function HomePage() {
  const imageList = await db.query.images.findMany({
    orderBy: desc(images.name),
  });
  return (
    <main className="">
      <SignedOut>
        <div className="p-40 text-center">
          {" "}
          Please sign in to view the gallery.
        </div>
      </SignedOut>
      <SignedIn>
        <Images imageList={imageList} />
      </SignedIn>
    </main>
  );
}
