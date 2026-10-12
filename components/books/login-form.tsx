"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AuthField } from "@/components/books/auth-field";
import { AuthShell } from "@/components/books/auth-shell";
import { useGuestLibrary } from "@/components/books/guest-library";

function destination(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return "/shelf";
  return value;
}

export function LoginForm() {
  const router = useRouter();
  const search = useSearchParams();
  const next = destination(search.get("next"));
  const { signIn } = useGuestLibrary();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const message = signIn(email, password);
    if (message) {
      setError(message);
      return;
    }
    router.push(next);
  }

  return (
    <AuthShell
      kicker="Welcome back"
      title="Sign in to your shelf."
      description="Use the email you saved on this device. Your reading list and statuses stay in this browser."
    >
      <form className="space-y-4" onSubmit={onSubmit} noValidate>
        <AuthField
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <AuthField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="At least 8 characters"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        {error ? <p className="text-sm text-destructive">{error}</p> : null}
        <Button type="submit" className="h-11 w-full font-semibold">
          Sign in
        </Button>
      </form>
      <div className="mt-6 flex flex-col gap-2 text-sm">
        <Link href="/forgot-password" className="text-primary hover:underline">
          Forgot password?
        </Link>
        <p className="text-muted-foreground">
          New here?{" "}
          <Link href={`/signup?next=${encodeURIComponent(next)}`} className="font-semibold text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
