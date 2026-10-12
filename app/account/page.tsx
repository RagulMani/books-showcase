import type { Metadata } from "next";
import { AccountView } from "@/components/books/account-view";
import { PageFrame } from "@/components/books/page-frame";

export const metadata: Metadata = {
  title: "Account",
  description: "See your Books Showcase name, email, and how your saved titles are split by reading status.",
};

export default function AccountPage() {
  return (
    <PageFrame>
      <AccountView />
    </PageFrame>
  );
}
