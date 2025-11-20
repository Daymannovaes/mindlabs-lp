import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import { FacebookPixelHead, FacebookPixelNoscript } from "./components/FacebookPixelDocument";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solvelabs | JavaScript & TypeScript Consultancy for Engineering Teams",
  description: "Expert JavaScript and TypeScript consultancy helping engineering teams build better software. Architecture, code quality, tooling, and best practices for modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <FacebookPixelHead />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <FacebookPixelNoscript />
        </noscript>
        {children}
      </body>
    </html>
  );
}
