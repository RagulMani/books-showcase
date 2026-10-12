"use client";

import { useMemo, useState } from "react";
import { BookCard } from "@/components/books/book-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  categoryList,
  searchBooks,
  type BookCategory,
  type CatalogSort,
} from "@/lib/books";

export function CatalogBrowser({
  initialCategory = "All",
  heading,
  description,
}: {
  initialCategory?: BookCategory | "All";
  heading: string;
  description: string;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BookCategory | "All">(initialCategory);
  const [sort, setSort] = useState<CatalogSort>("newest");
  const results = useMemo(
    () => searchBooks({ query, category, sort }),
    [query, category, sort],
  );

  return (
    <div>
      <h1 className="font-heading text-4xl font-normal text-foreground">{heading}</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>
      <form className="mt-8 grid gap-4 md:grid-cols-[1.4fr_1fr_1fr]" onSubmit={(event) => event.preventDefault()}>
        <div className="space-y-2">
          <Label htmlFor="catalog-search">Search</Label>
          <Input
            id="catalog-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Title, author, or a phrase"
            className="h-11 bg-card px-4 text-base placeholder:italic"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="catalog-category">Category</Label>
          <select
            id="catalog-category"
            value={category}
            onChange={(event) => setCategory(event.target.value as BookCategory | "All")}
            className="h-11 w-full rounded-md border border-input bg-card px-3 text-base text-foreground"
          >
            <option value="All">All categories</option>
            {categoryList.map((item) => (
              <option key={item.slug} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="catalog-sort">Sort</Label>
          <select
            id="catalog-sort"
            value={sort}
            onChange={(event) => setSort(event.target.value as CatalogSort)}
            className="h-11 w-full rounded-md border border-input bg-card px-3 text-base text-foreground"
          >
            <option value="newest">Newest first</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
        </div>
      </form>
      <p className="mt-6 text-sm text-muted-foreground">
        {results.length} {results.length === 1 ? "title" : "titles"}
      </p>
      {results.length === 0 ? (
        <p className="mt-6 rounded-lg border border-border bg-card p-6 text-base text-foreground">
          Nothing matches that search. Try another title, author, or category.
        </p>
      ) : (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
