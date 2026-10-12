"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { readingStatuses } from "@/lib/books";
import { useGuestLibrary } from "@/components/books/guest-library";

export function AccountView() {
  const { ready, guest, shelf, signOut } = useGuestLibrary();

  if (!ready) {
    return <p className="text-base text-muted-foreground">Opening your account…</p>;
  }

  if (!guest) {
    return (
      <div>
        <h1 className="font-heading text-4xl font-normal text-foreground">Account</h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          Sign in to see the name on your shelf and how many titles you are keeping.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button className="h-11" asChild>
            <Link href="/login?next=/account">Sign in</Link>
          </Button>
          <Button variant="outline" className="h-11 border-2 border-primary text-primary hover:bg-accent" asChild>
            <Link href="/signup?next=/account">Create an account</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <h1 className="font-heading text-4xl font-normal text-foreground">Account</h1>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        This account lives in this browser. Your shelf stays with this email on this device.
      </p>
      <dl className="mt-8 space-y-4 rounded-lg border border-border bg-card p-6">
        <div>
          <dt className="text-sm font-semibold text-foreground">Name</dt>
          <dd className="mt-1 text-base text-foreground">{guest.name}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-foreground">Email</dt>
          <dd className="mt-1 text-base text-foreground">{guest.email}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-foreground">Shelf</dt>
          <dd className="mt-1 text-base text-foreground">
            {shelf.length} {shelf.length === 1 ? "title" : "titles"}
          </dd>
        </div>
      </dl>
      <ul className="mt-6 grid gap-3 sm:grid-cols-3">
        {readingStatuses.map((status) => {
          const count = shelf.filter((entry) => entry.status === status.id).length;
          return (
            <li key={status.id} className="rounded-lg border border-border bg-secondary p-4">
              <p className="font-heading text-3xl font-normal text-foreground">{count}</p>
              <p className="mt-1 text-sm text-muted-foreground">{status.label}</p>
            </li>
          );
        })}
      </ul>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button className="h-11" asChild>
          <Link href="/shelf">Open my shelf</Link>
        </Button>
        <Button variant="outline" className="h-11 border-2 border-primary text-primary hover:bg-accent" onClick={signOut}>
          Sign out
        </Button>
      </div>
    </div>
  );
}
