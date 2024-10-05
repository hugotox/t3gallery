import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { FileUploader } from "~/app/_components/file-uploader";
import { getImages } from "~/server/db/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const imageList = await getImages();
  return (
    <div className="flex flex-wrap gap-3">
      {imageList.map((image) => (
        <div
          key={image.id}
          className="flex h-32 w-32 flex-col gap-1 rounded-sm bg-slate-200 p-2"
        >
          <Link href={`/img/${image.id}`}>
            <img
              src={image.url}
              alt={image.name}
              className="h-20 object-contain"
              width={80}
              height={80}
            />
            <span className="text-xs">{image.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="p-40 text-center">
          Please sign in to view the gallery.
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
        <br />
        <FileUploader />
      </SignedIn>
    </main>
  );
}
