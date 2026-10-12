"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGuestLibrary } from "@/components/books/guest-library";

const links = [
  { href: "/catalog", label: "Catalog" },
  { href: "/categories", label: "Categories" },
  { href: "/shelf", label: "My shelf" },
];

export function SiteHeader() {
  const { guest, ready } = useGuestLibrary();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-card">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="font-heading text-xl font-semibold text-foreground">
          Books Showcase
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-base text-foreground hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          {ready && guest ? (
            <Button variant="outline" className="h-11 border-2 border-primary text-primary hover:bg-accent" asChild>
              <Link href="/account">{guest.name}</Link>
            </Button>
          ) : (
            <>
              <Button variant="ghost" className="h-11" asChild>
                <Link href="/login">Sign in</Link>
              </Button>
              <Button className="h-11 px-6 font-semibold" asChild>
                <Link href="/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-border bg-card px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-base text-foreground" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            {ready && guest ? (
              <Button className="h-11" asChild>
                <Link href="/account">Account</Link>
              </Button>
            ) : (
              <>
                <Button variant="outline" className="h-11" asChild>
                  <Link href="/login">Sign in</Link>
                </Button>
                <Button className="h-11" asChild>
                  <Link href="/signup">Sign up</Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
