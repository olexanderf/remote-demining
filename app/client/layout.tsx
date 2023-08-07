import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const open_sans = Open_Sans({ subsets: ["latin"] });

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
    <body className={open_sans.className}>
      <Header />
      {children}
      <Footer />
    </body>
  );
}
