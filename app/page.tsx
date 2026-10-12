import type { Metadata } from "next";
import { LandingPage } from "@/components/books/landing-page";

export const metadata: Metadata = {
  title: "Books Showcase",
  description:
    "Browse a curated shelf of books, filter by category, and sign in on this device to save titles you want to read.",
};

export default function HomePage() {
  return <LandingPage />;
}
