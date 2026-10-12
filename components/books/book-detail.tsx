"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BookCard } from "@/components/books/book-card";
import { Button } from "@/components/ui/button";
import { categoryList, readingStatuses, type Book, type ReadingStatus } from "@/lib/books";
import { useGuestLibrary } from "@/components/books/guest-library";

export function BookDetail({ book, related }: { book: Book; related: Book[] }) {
  const router = useRouter();
  const { guest, entryFor, save, remove } = useGuestLibrary();
  const entry = entryFor(book.id);
  const category = categoryList.find((item) => item.name === book.category);

  function choose(status: ReadingStatus) {
    if (!guest) {
      router.push(`/login?next=/books/${book.id}`);
      return;
    }
    save(book.id, status);
  }

  return (
    <article>
      <p className="text-sm text-muted-foreground">
        <Link href="/catalog" className="hover:text-primary">
          Catalog
        </Link>
        {category ? (
          <>
            {" / "}
            <Link href={`/categories/${category.slug}`} className="hover:text-primary">
              {book.category}
            </Link>
          </>
        ) : null}
      </p>
      <div className="mt-6 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-border bg-secondary">
          <Image src={book.image} alt={book.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />
        </div>
        <div>
          <h1 className="font-heading text-4xl font-normal leading-tight text-foreground">{book.title}</h1>
          <p className="mt-3 text-base text-muted-foreground">
            {book.author} · {book.year} · {book.pages} pages
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground">{book.blurb}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{book.note}</p>
          <div className="mt-8">
            <p className="text-sm font-semibold text-foreground">Reading status</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {readingStatuses.map((status) => {
                const active = entry?.status === status.id;
                return (
                  <Button
                    key={status.id}
                    type="button"
                    variant={active ? "default" : "outline"}
                    className={active ? "h-11" : "h-11 border-2 border-primary text-primary hover:bg-accent"}
                    aria-pressed={active}
                    onClick={() => choose(status.id)}
                  >
                    {status.label}
                  </Button>
                );
              })}
            </div>
            {entry ? (
              <Button type="button" variant="ghost" className="mt-3 h-11" onClick={() => remove(book.id)}>
                Remove from my shelf
              </Button>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">
                {guest
                  ? "Choose a status to keep this title on your shelf."
                  : "Sign in to save this title and set a status."}
              </p>
            )}
          </div>
        </div>
      </div>
      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="font-heading text-3xl font-normal text-foreground">More in {book.category}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <BookCard key={item.id} book={item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
