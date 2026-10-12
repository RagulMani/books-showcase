import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogBrowser } from "@/components/books/catalog-browser";
import { PageFrame } from "@/components/books/page-frame";
import { categoryBySlug, categoryList } from "@/lib/books";

export function generateStaticParams() {
  return categoryList.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) return { title: "Category" };
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) notFound();

  return (
    <PageFrame>
      <CatalogBrowser
        initialCategory={category.name}
        heading={category.name}
        description={category.description}
      />
    </PageFrame>
  );
}
