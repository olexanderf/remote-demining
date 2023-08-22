import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import "./globals.css";
import "./normalize.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={open_sans.className}>{children}</body>
    </html>
  );
}
