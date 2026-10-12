import type { Metadata } from "next";
import { PageFrame } from "@/components/books/page-frame";
import { ShelfView } from "@/components/books/shelf-view";

export const metadata: Metadata = {
  title: "My shelf",
  description: "See the Books Showcase titles you saved, filtered by want to read, currently reading, and finished.",
};

export default function ShelfPage() {
  return (
    <PageFrame>
      <ShelfView />
    </PageFrame>
  );
}
