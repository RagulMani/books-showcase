import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-secondary">
      <div className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col justify-center px-4 py-16">
        <Link href="/" className="mb-6 text-center font-heading text-2xl text-foreground">
          Books Showcase
        </Link>
        {children}
      </div>
    </div>
  );
}
