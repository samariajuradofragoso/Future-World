import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Furure World",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
   <header>

<nav>

<ul>
<link href="/">

<li>Home</li>
</link>
< link href="/store">

<li>Store</li>
</link>
</ul>

</nav>

   </header>
   
   
    </html>
  );
}
