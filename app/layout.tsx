import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ConsoleEasterEgg } from "@/components/console-easter-egg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TypeBuddy - Your Typing Companion",
  description: "Esimple, secure, and fast - your words only a keystroke away.",
  keywords: "text expander, chrome extension, productivity, shortcuts, snippets",
  authors: [{ name: "TypeBuddy Team" }],
  openGraph: {
    title: "TypeBuddy - Your Typing Companion",
    description: "Esimple, secure, and fast - your words only a keystroke away.",
    type: "website",
    locale: "en_US",
    url: "https://TypeBuddy.com",
    siteName: "TypeBuddy",
  },
  twitter: {
    card: "summary_large_image",
    title: "TypeBuddy - Your Typing Companion",
    description: "Esimple, secure, and fast - your words only a keystroke away.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ConsoleEasterEgg />
          {children}
        </Providers>
      </body>
    </html>
  );
}