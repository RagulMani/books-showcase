"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AuthField({
  id,
  label,
  error,
  ...props
}: React.ComponentProps<"input"> & {
  id: string;
  label: string;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="h-11 bg-card px-4 text-base placeholder:italic"
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
