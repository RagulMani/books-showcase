"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthField } from "@/components/books/auth-field";
import { AuthShell } from "@/components/books/auth-shell";

export function ForgotForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const normalized = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      setError("Enter a valid email address.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
  }

  return (
    <AuthShell
      kicker="Account help"
      title="Forgot your password?"
      description="Enter the email on this device. This preview does not send email. You can sign in again with any password of eight or more characters."
    >
      {sent ? (
        <div className="space-y-4">
          <p className="rounded-md bg-secondary px-4 py-3 text-sm leading-relaxed text-foreground">
            If that address has an account here, you can return to sign in. Use a
            password of at least 8 characters.
          </p>
          <Button className="h-11 w-full font-semibold" asChild>
            <Link href="/login">Back to sign in</Link>
          </Button>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={onSubmit} noValidate>
          <AuthField
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={error}
            required
          />
          <Button type="submit" className="h-11 w-full font-semibold">
            Continue
          </Button>
        </form>
      )}
      <p className="mt-6 text-sm text-muted-foreground">
        Remembered it?{" "}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
