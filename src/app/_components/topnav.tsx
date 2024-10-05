import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="full-w bg-black py-3 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">Gallery</Link>
        <div className="h-7">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
