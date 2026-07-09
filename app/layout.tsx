import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Aspire's body face is Inter, loaded here via next/font/google.
// The display face (Satoshi) is linked separately below via Fontshare,
// since it isn't available through next/font/google.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Business account sample — Aspire",
  description:
    "Sample recreation of the Aspire business account marketing page, built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Aspire's real display face. Not on Google Fonts, so it's loaded
            from Fontshare (free, hosted) here. Swap for a self-hosted
            next/font/local setup if you have the licensed woff2 files. */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
