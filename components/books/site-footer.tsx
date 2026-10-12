import Link from "next/link";

const columns = [
  {
    title: "Browse",
    links: [
      { href: "/catalog", label: "Catalog" },
      { href: "/categories", label: "Categories" },
      { href: "/#notes", label: "Reader notes" },
    ],
  },
  {
    title: "Your reading",
    links: [
      { href: "/shelf", label: "My shelf" },
      { href: "/account", label: "Account" },
      { href: "/login", label: "Sign in" },
      { href: "/signup", label: "Create an account" },
      { href: "/forgot-password", label: "Forgot password" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-heading text-xl text-foreground">Books Showcase</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Search the catalog, open a title, and keep a shelf of what you want to read, what you are reading, and what you have finished.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold text-foreground">{column.title}</p>
            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
