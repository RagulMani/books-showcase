import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { LoginForm } from "@/components/books/login-form";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to Books Showcase and return to the titles you saved on this device.",
};

export default function LoginPage() {
  return (
    <>
      <Suspense fallback={<p className="text-center text-sm text-muted-foreground">Opening sign in…</p>}>
        <LoginForm />
      </Suspense>
      <p className="mt-6 text-center text-sm">
        <Link href="/" className="text-muted-foreground hover:text-primary">
          Back to the shelf
        </Link>
      </p>
    </>
  );
}
