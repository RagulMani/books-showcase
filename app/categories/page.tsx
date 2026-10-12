import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/books/page-frame";
import { booksInCategory, categoryList } from "@/lib/books";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse Books Showcase by literary fiction, essays, poetry, historical fiction, short stories, and nature writing.",
};

export default function CategoriesPage() {
  return (
    <PageFrame>
      <h1 className="font-heading text-4xl font-normal text-foreground">Categories</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Six ways into the catalog. Open one to see only those titles.
      </p>
      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {categoryList.map((category) => {
          const count = booksInCategory(category.name).length;
          return (
            <li key={category.slug}>
              <Link
                href={`/categories/${category.slug}`}
                className="block h-full rounded-lg border border-border bg-card p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-primary"
              >
                <h2 className="font-heading text-2xl font-normal text-foreground">{category.name}</h2>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{category.description}</p>
                <p className="mt-4 text-sm font-semibold text-primary">
                  {count} {count === 1 ? "title" : "titles"}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </PageFrame>
  );
}
