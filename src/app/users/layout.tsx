import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User App",
  description: "User nested layouts",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-page="user-page">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
