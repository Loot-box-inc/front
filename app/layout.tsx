import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lootboxes for airdrop",
  description: "Lootboxes for airdrop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Lootboxes for airdrop</title>
        <meta name="description" content="Lootboxes for airdrop"></meta>

        <meta property="og:url" content="https://lootfront.netlify.app"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Lootboxes for airdrop"></meta>
        <meta property="og:description" content="Lootboxes for airdrop"></meta>
        <meta
          property="og:image"
          content="https://telegra.ph/file/f23302cab436c607f8302.png"
        ></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:domain" content="lootfront.netlify.app"></meta>
        <meta
          property="twitter:url"
          content="https://lootfront.netlify.app"
        ></meta>
        <meta name="twitter:title" content="Lootboxes for airdrop"></meta>
        <meta name="twitter:description" content="Lootboxes for airdrop"></meta>
        <meta name="twitter:image" content=""></meta>
      </head>
      <body className={`${inter.className} px-10 `}>{children}</body>
    </html>
  );
}
