import type { Metadata } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "OFF Day Studio — We Build What Makes You Stand Out.",
  description:
    "OFF Day Studio builds websites, brands, content and digital experiences that help businesses stand out.",
  icons: {
    icon: "/favicon_io/offday_charector-png.png",
    shortcut: "/favicon_io/offday_charector-png.png",
  },
  openGraph: {
    title: "OFF Day Studio — We Build What Makes You Stand Out.",
    description: "Creative digital work for brands that refuse to blend in.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OFF Day Studio",
    description: "We Build What Makes You Stand Out.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <CustomCursor />
        <SmoothScroll />
      </body>
    </html>
  );
}
