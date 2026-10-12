import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// Inter is the DEFAULT body font, exposed as `--font-sans-default`.
// globals.css maps `--font-sans` → this default but lets a generated theme
// override `--font-sans`/`--font-heading` on `:root`. This is the App Router
// analogue of the Pages Router `pages/_app.tsx` font wiring.
const inter = Inter({ subsets: ["latin"], variable: "--font-sans-default" });

export const metadata: Metadata = {
  title: {
    default: "Books Showcase",
    template: "%s · Books Showcase",
  },
  description:
    "Browse a curated shelf of books, save titles on this device, and sign in when you are ready to keep a reading list.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
