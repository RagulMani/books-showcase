import type { Metadata } from "next";
import { CatalogBrowser } from "@/components/books/catalog-browser";
import { PageFrame } from "@/components/books/page-frame";

export const metadata: Metadata = {
  title: "Catalog",
  description: "Search the Books Showcase catalog by title, author, or category, and open any title.",
};

export default function CatalogPage() {
  return (
    <PageFrame>
      <CatalogBrowser
        heading="Catalog"
        description="Search the shelf, narrow it by category, and open a title when you want the longer note."
      />
    </PageFrame>
  );
}
