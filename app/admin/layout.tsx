import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";


export const metadata: Metadata = {
  title: "",
  description: "",
};

const open_sans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={open_sans.className}>
      <Header />
      <Container>{children}</Container>
    </body>
  );
}
