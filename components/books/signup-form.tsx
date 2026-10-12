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

export function SignupForm() {
  const router = useRouter();
  const search = useSearchParams();
  const next = destination(search.get("next"));
  const { signUp } = useGuestLibrary();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (password !== confirm) {
      setError("Those passwords do not match.");
      return;
    }
    const message = signUp(name, email, password);
    if (message) {
      setError(message);
      return;
    }
    router.push(next);
  }

  return (
    <AuthShell
      kicker="Join the shelf"
      title="Create your account."
      description="Save titles and set a reading status. Your name, email, and shelf stay on this device."
    >
      <form className="space-y-4" onSubmit={onSubmit} noValidate>
        <AuthField
          id="name"
          label="Name"
          autoComplete="name"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
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
          autoComplete="new-password"
          placeholder="At least 8 characters"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <AuthField
          id="confirm"
          label="Confirm password"
          type="password"
          autoComplete="new-password"
          placeholder="Repeat your password"
          value={confirm}
          onChange={(event) => setConfirm(event.target.value)}
          required
        />
        {error ? <p className="text-sm text-destructive">{error}</p> : null}
        <Button type="submit" className="h-11 w-full font-semibold">
          Sign up to explore
        </Button>
      </form>
      <p className="mt-6 text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href={`/login?next=${encodeURIComponent(next)}`} className="font-semibold text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
