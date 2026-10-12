"use client";

import Link from "next/link";
import { BookCard } from "@/components/books/book-card";
import { Button } from "@/components/ui/button";
import { getBook, readingStatuses, type ReadingStatus } from "@/lib/books";
import { useGuestLibrary } from "@/components/books/guest-library";
import { useState } from "react";

export function ShelfView() {
  const { ready, guest, shelf } = useGuestLibrary();
  const [filter, setFilter] = useState<ReadingStatus | "all">("all");

  if (!ready) {
    return <p className="text-base text-muted-foreground">Opening your shelf…</p>;
  }

  if (!guest) {
    return (
      <div>
        <h1 className="font-heading text-4xl font-normal text-foreground">My shelf</h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          Sign in to see the titles you have saved and the status you gave each one.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button className="h-11" asChild>
            <Link href="/login?next=/shelf">Sign in</Link>
          </Button>
          <Button variant="outline" className="h-11 border-2 border-primary text-primary hover:bg-accent" asChild>
            <Link href="/signup?next=/shelf">Create an account</Link>
          </Button>
        </div>
      </div>
    );
  }

  const visible = shelf.filter((entry) => filter === "all" || entry.status === filter);
  const books = visible
    .map((entry) => getBook(entry.bookId))
    .filter((book): book is NonNullable<typeof book> => book !== null);

  return (
    <div>
      <h1 className="font-heading text-4xl font-normal text-foreground">My shelf</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {guest.name}, these are the titles saved to this device. Change a status from the title page, or filter the list here.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        <FilterButton active={filter === "all"} onClick={() => setFilter("all")} label={`All (${shelf.length})`} />
        {readingStatuses.map((status) => {
          const count = shelf.filter((entry) => entry.status === status.id).length;
          return (
            <FilterButton
              key={status.id}
              active={filter === status.id}
              onClick={() => setFilter(status.id)}
              label={`${status.label} (${count})`}
            />
          );
        })}
      </div>
      {books.length === 0 ? (
        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          <p className="text-base text-foreground">
            {shelf.length === 0
              ? "Your shelf is empty. Save a title from the catalog and it will land here as want to read."
              : "Nothing in that status yet."}
          </p>
          <Button className="mt-4 h-11" asChild>
            <Link href="/catalog">Browse the catalog</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? "h-10 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground"
          : "h-10 rounded-full bg-accent px-4 text-sm font-semibold text-accent-foreground"
      }
    >
      {label}
    </button>
  );
}
