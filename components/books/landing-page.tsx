"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/books/book-card";
import { SiteFooter } from "@/components/books/site-footer";
import { SiteHeader } from "@/components/books/site-header";
import { books, categories, notes, questions, shelfStats, type BookCategory } from "@/lib/books";

export function LandingPage() {
  const [category, setCategory] = useState<BookCategory | "All">("All");
  const visible = useMemo(
    () => (category === "All" ? books : books.filter((book) => book.category === category)),
    [category],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-16">
        <section className="bg-secondary">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="text-sm font-semibold text-primary">A curated shelf</p>
              <h1 className="mt-4 font-heading text-5xl font-normal leading-[1.1] text-foreground sm:text-[3.5rem]">
                Discover your next favorite read.
              </h1>
              <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
                Six titles chosen for readers who like a short note before they commit.
                Browse by category, open a title, and save the ones you want beside the bed.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="h-11 px-6 font-semibold" asChild>
                  <Link href="/signup">Sign up to explore</Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-11 border-2 border-primary px-6 font-semibold text-primary hover:bg-accent"
                  asChild
                >
                  <Link href="/catalog">Browse the catalog</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-border shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/library/9572664.jpg"
                alt="Warm wooden bookshelves filled with books"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <dl className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
            {shelfStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-4xl font-normal text-foreground">{stat.value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="shelf" className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-normal text-foreground">Featured titles</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              A small shelf, not a warehouse. Filter by the kind of reading you want tonight.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2" id="categories">
            {categories.map((item) => {
              const active = item === category;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={
                    active
                      ? "h-10 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground"
                      : "h-10 rounded-full bg-accent px-4 text-sm font-semibold text-accent-foreground"
                  }
                  aria-pressed={active}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((book) => (
              <motion.div key={book.id} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <BookCard book={book} />
              </motion.div>
            ))}
          </div>
          {visible.length === 0 ? (
            <p className="mt-8 text-base text-muted-foreground">Nothing in that category yet.</p>
          ) : null}
        </section>

        <section className="bg-secondary">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-16 lg:grid-cols-2">
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/library/936133.jpg"
                alt="A reader sitting with a book in a quiet park"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-normal text-foreground">Why this shelf</h2>
              <ul className="mt-6 space-y-5">
                <li>
                  <h3 className="font-heading text-xl font-normal">Short notes, not blurbs that shout</h3>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                    Each title carries who wrote it, when it landed, and why it belongs here.
                  </p>
                </li>
                <li>
                  <h3 className="font-heading text-xl font-normal">Save without leaving the page</h3>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                    Heart a book and it stays on this device, ready when you come back.
                  </p>
                </li>
                <li>
                  <h3 className="font-heading text-xl font-normal">Sign in when you want a name on the list</h3>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                    Browsing stays open. An account is only for keeping the shelf yours.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="notes" className="mx-auto max-w-[1200px] px-6 py-16">
          <h2 className="font-heading text-3xl font-normal text-foreground">Reader notes</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {notes.map((note) => (
              <figure key={note.name} className="rounded-lg border border-border bg-card p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <blockquote className="text-base leading-relaxed text-foreground">“{note.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  {note.name}
                  <span className="block">{note.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-16">
          <h2 className="text-center font-heading text-3xl font-normal text-foreground">Questions</h2>
          <Accordion type="single" collapsible className="mt-8">
            {questions.map((item, index) => (
              <AccordionItem key={item.q} value={`q-${index}`}>
                <AccordionTrigger className="text-left text-base">{item.q}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="px-6 pb-16">
          <div className="mx-auto max-w-[1200px] rounded-lg bg-foreground px-8 py-12 text-center text-background">
            <h2 className="font-heading text-3xl font-normal">Keep a list worth returning to.</h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed opacity-80">
              Create an account on this device, then save the titles you actually intend to open.
            </p>
            <Button className="mt-8 h-11 px-6 font-semibold" asChild>
              <Link href="/signup">Sign up to explore</Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
