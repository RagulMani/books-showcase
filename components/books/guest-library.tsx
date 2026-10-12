"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReadingStatus } from "@/lib/books";

const GUEST_KEY = "books-showcase-guest";
const ACCOUNTS_KEY = "books-showcase-accounts";
const SHELF_KEY = "books-showcase-shelves";
const LEGACY_SAVED_KEY = "books-showcase-saved";

type Account = { name: string; email: string };
type Guest = { name: string; email: string };
export type ShelfEntry = { bookId: string; status: ReadingStatus };
type ShelfMap = Record<string, ShelfEntry[]>;

type GuestLibraryValue = {
  ready: boolean;
  guest: Guest | null;
  shelf: ShelfEntry[];
  signIn: (email: string, password: string) => string | null;
  signUp: (name: string, email: string, password: string) => string | null;
  signOut: () => void;
  save: (bookId: string, status?: ReadingStatus) => boolean;
  setStatus: (bookId: string, status: ReadingStatus) => void;
  remove: (bookId: string) => void;
  entryFor: (bookId: string) => ShelfEntry | null;
  isSaved: (bookId: string) => boolean;
};

const GuestLibraryContext = createContext<GuestLibraryValue | null>(null);

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function isStatus(value: unknown): value is ReadingStatus {
  return value === "want" || value === "reading" || value === "finished";
}

function normalizeEntries(value: unknown): ShelfEntry[] {
  if (!Array.isArray(value)) return [];
  const seen = new Set<string>();
  const entries: ShelfEntry[] = [];
  for (const item of value) {
    if (!item || typeof item !== "object") continue;
    const bookId = "bookId" in item ? item.bookId : undefined;
    const status = "status" in item ? item.status : undefined;
    if (typeof bookId !== "string" || seen.has(bookId) || !isStatus(status)) continue;
    seen.add(bookId);
    entries.push({ bookId, status });
  }
  return entries;
}

export function GuestLibraryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);
  const [guest, setGuest] = useState<Guest | null>(null);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [shelves, setShelves] = useState<ShelfMap>({});

  useEffect(() => {
    const storedGuest = readJson<Guest | null>(GUEST_KEY, null);
    const storedAccounts = readJson<Account[]>(ACCOUNTS_KEY, []);
    const storedShelves = readJson<ShelfMap>(SHELF_KEY, {});
    const legacy = readJson<unknown>(LEGACY_SAVED_KEY, null);
    let nextShelves = storedShelves;
    if (Array.isArray(legacy) && storedGuest?.email) {
      const current = normalizeEntries(storedShelves[storedGuest.email]);
      const seen = new Set(current.map((entry) => entry.bookId));
      for (const id of legacy) {
        if (typeof id === "string" && !seen.has(id)) {
          current.push({ bookId: id, status: "want" });
          seen.add(id);
        }
      }
      nextShelves = { ...storedShelves, [storedGuest.email]: current };
      window.localStorage.setItem(SHELF_KEY, JSON.stringify(nextShelves));
      window.localStorage.removeItem(LEGACY_SAVED_KEY);
    }
    setGuest(storedGuest);
    setAccounts(Array.isArray(storedAccounts) ? storedAccounts : []);
    setShelves(nextShelves);
    setReady(true);
  }, []);

  const shelf = useMemo(() => {
    if (!guest) return [];
    return normalizeEntries(shelves[guest.email]);
  }, [guest, shelves]);

  const writeShelf = useCallback(
    (email: string, entries: ShelfEntry[]) => {
      setShelves((current) => {
        const next = { ...current, [email]: entries };
        window.localStorage.setItem(SHELF_KEY, JSON.stringify(next));
        return next;
      });
    },
    [],
  );

  const signIn = useCallback(
    (email: string, password: string) => {
      const normalized = email.trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
        return "Enter a valid email address.";
      }
      if (password.length < 8) return "Use a password of at least 8 characters.";
      const stored = readJson<Account[]>(ACCOUNTS_KEY, accounts);
      const account = stored.find((item) => item.email === normalized);
      if (!account) return "No account on this device for that email. Create one first.";
      const next = { name: account.name, email: account.email };
      setAccounts(stored);
      setGuest(next);
      window.localStorage.setItem(GUEST_KEY, JSON.stringify(next));
      return null;
    },
    [accounts],
  );

  const signUp = useCallback(
    (name: string, email: string, password: string) => {
      const trimmed = name.trim();
      const normalized = email.trim().toLowerCase();
      if (trimmed.length < 2) return "Enter the name you want on the shelf.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) return "Enter a valid email address.";
      if (password.length < 8) return "Use a password of at least 8 characters.";
      const stored = readJson<Account[]>(ACCOUNTS_KEY, accounts);
      if (stored.some((item) => item.email === normalized)) {
        return "That email already has an account on this device.";
      }
      const nextAccounts = [...stored, { name: trimmed, email: normalized }];
      const nextGuest = { name: trimmed, email: normalized };
      setAccounts(nextAccounts);
      setGuest(nextGuest);
      window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(nextAccounts));
      window.localStorage.setItem(GUEST_KEY, JSON.stringify(nextGuest));
      return null;
    },
    [accounts],
  );

  const signOut = useCallback(() => {
    setGuest(null);
    window.localStorage.removeItem(GUEST_KEY);
  }, []);

  const save = useCallback(
    (bookId: string, status: ReadingStatus = "want") => {
      if (!guest) return false;
      const current = normalizeEntries(shelves[guest.email]);
      const existing = current.find((entry) => entry.bookId === bookId);
      const next = existing
        ? current.map((entry) => (entry.bookId === bookId ? { ...entry, status } : entry))
        : [...current, { bookId, status }];
      writeShelf(guest.email, next);
      return true;
    },
    [guest, shelves, writeShelf],
  );

  const setStatus = useCallback(
    (bookId: string, status: ReadingStatus) => {
      save(bookId, status);
    },
    [save],
  );

  const remove = useCallback(
    (bookId: string) => {
      if (!guest) return;
      const next = normalizeEntries(shelves[guest.email]).filter((entry) => entry.bookId !== bookId);
      writeShelf(guest.email, next);
    },
    [guest, shelves, writeShelf],
  );

  const value = useMemo<GuestLibraryValue>(
    () => ({
      ready,
      guest,
      shelf,
      signIn,
      signUp,
      signOut,
      save,
      setStatus,
      remove,
      entryFor: (bookId: string) => shelf.find((entry) => entry.bookId === bookId) ?? null,
      isSaved: (bookId: string) => shelf.some((entry) => entry.bookId === bookId),
    }),
    [ready, guest, shelf, signIn, signUp, signOut, save, setStatus, remove],
  );

  return <GuestLibraryContext.Provider value={value}>{children}</GuestLibraryContext.Provider>;
}

export function useGuestLibrary() {
  const value = useContext(GuestLibraryContext);
  if (!value) {
    throw new Error("useGuestLibrary must be used within GuestLibraryProvider");
  }
  return value;
}
