import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookDetail } from "@/components/books/book-detail";
import { PageFrame } from "@/components/books/page-frame";
import { books, getBook, relatedBooks } from "@/lib/books";

export function generateStaticParams() {
  return books.map((book) => ({ id: book.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const book = getBook(id);
  if (!book) return { title: "Title" };
  return { title: book.title, description: book.blurb };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const book = getBook(id);
  if (!book) notFound();

  return (
    <PageFrame>
      <BookDetail book={book} related={relatedBooks(book)} />
    </PageFrame>
  );
}
