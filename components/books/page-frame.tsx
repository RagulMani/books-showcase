import { SiteFooter } from "@/components/books/site-footer";
import { SiteHeader } from "@/components/books/site-header";

export function PageFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-[1200px] px-6 pb-16 pt-24">{children}</main>
      <SiteFooter />
    </div>
  );
}
