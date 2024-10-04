import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/Yi3ViA8DRbmOcTXbnfLAY8MDzBC06NVlQvhsyU3mEgSoInKF",
  "https://utfs.io/f/Yi3ViA8DRbmO3UA9o4V7hiM1z9uON6wyAqrn2UeoDpkV3YCj",
  "https://utfs.io/f/Yi3ViA8DRbmOWtSLuafXAiswRnpaZ7cdM35QyHfYrtu20l1b",
  "https://utfs.io/f/Yi3ViA8DRbmOGdJwVGxucqgRs109zoHY4WnimOjX6kCJ2Ebr",
  "https://utfs.io/f/Yi3ViA8DRbmO6PfDuUZSaNTK9UCmhOxJAlBM6Wd2eLH4ZPYD",
  "https://utfs.io/f/Yi3ViA8DRbmO2X2gXRcTmpb4uOD50isgGHU39PCQeSIYvM8j",
];

const mockImages = mockUrls.map((url) => ({
  id: url,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log({ posts });
  return (
    <main className="">
      <div className="flex flex-wrap gap-3">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </main>
  );
}
