"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Book } from "@/lib/books";
import { statusLabel } from "@/lib/books";
import { useGuestLibrary } from "@/components/books/guest-library";

export function BookCard({ book }: { book: Book }) {
  const router = useRouter();
  const { isSaved, save, remove, entryFor, guest } = useGuestLibrary();
  const saved = isSaved(book.id);
  const entry = entryFor(book.id);

  function onSave() {
    if (!guest) {
      router.push(`/login?next=/books/${book.id}`);
      return;
    }
    if (saved) remove(book.id);
    else save(book.id, "want");
  }

  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <Link href={`/books/${book.id}`} className="relative mb-4 block aspect-[3/2] overflow-hidden rounded-md bg-secondary">
        <Image
          src={book.image}
          alt={book.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </Link>
      <div className="mb-3 flex flex-wrap gap-2">
        <Badge className="rounded-full border-transparent bg-accent text-accent-foreground hover:bg-accent">
          {book.category}
        </Badge>
        {entry ? <Badge className="rounded-full">{statusLabel(entry.status)}</Badge> : null}
        {!entry && book.featured ? <Badge className="rounded-full">{book.highlight}</Badge> : null}
      </div>
      <h3 className="font-heading text-xl font-normal text-foreground">
        <Link href={`/books/${book.id}`} className="hover:text-primary">
          {book.title}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {book.author} · {book.year}
      </p>
      <p className="mt-3 flex-1 text-base leading-relaxed text-foreground">{book.blurb}</p>
      <div className="mt-5 flex items-center gap-3">
        <Button variant="outline" className="h-11 border-2 border-primary text-primary hover:bg-accent" asChild>
          <Link href={`/books/${book.id}`}>View details</Link>
        </Button>
        <Button type="button" variant="ghost" className="h-11" aria-pressed={saved} onClick={onSave}>
          <Heart className={saved ? "fill-primary text-primary" : ""} />
          {saved ? "Saved" : "Save"}
        </Button>
      </div>
    </article>
  );
}
