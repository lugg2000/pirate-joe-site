import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Crimson_Text } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pirate Joe: An Adventure in Business — Learning the Ropes",
  description:
    "The pirate adventure that adults keep reading for themselves. A crew of characters who'll feel suspiciously familiar. A story about risk, leadership, and finding the right people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${crimsonText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f0ebe0] text-[#2a1a0a]">
        {children}
      </body>
    </html>
  );
}
