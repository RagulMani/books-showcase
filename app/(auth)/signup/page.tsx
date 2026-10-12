import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { SignupForm } from "@/components/books/signup-form";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Create a Books Showcase account on this device and start a reading list.",
};

export default function SignupPage() {
  return (
    <>
      <Suspense fallback={<p className="text-center text-sm text-muted-foreground">Opening sign up…</p>}>
        <SignupForm />
      </Suspense>
      <p className="mt-6 text-center text-sm">
        <Link href="/" className="text-muted-foreground hover:text-primary">
          Back to the shelf
        </Link>
      </p>
    </>
  );
}
