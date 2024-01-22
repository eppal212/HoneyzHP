import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopMenu from "@/components/layout/TopMenu";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        <TopMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
