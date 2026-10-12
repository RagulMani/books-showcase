import type { Metadata } from "next";
import Link from "next/link";
import { ForgotForm } from "@/components/books/forgot-form";

export const metadata: Metadata = {
  title: "Forgot password",
  description: "Recover access to your Books Showcase account on this device.",
};

export default function ForgotPasswordPage() {
  return (
    <>
      <ForgotForm />
      <p className="mt-6 text-center text-sm">
        <Link href="/" className="text-muted-foreground hover:text-primary">
          Back to the shelf
        </Link>
      </p>
    </>
  );
}
