import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const FontSans = Plus_Jakarta_Sans({
   subsets: ["latin"],
   variable : '--font-sans',
   weight : ['300' , '400' , '500' , '600' , '700']
   });

export const metadata: Metadata = {
  title: "CarePulse",
  description: "doctor appointment application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`bg-dark-300 font-sans text-white min-h-screen antialiased` , FontSans.variable)}>{children}</body>
    </html>
  );
}
