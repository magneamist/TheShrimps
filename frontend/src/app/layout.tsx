import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import AuthWrapper from "@/components/auth-wrapper";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shrimps",
  description: "An online vintage store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        <AuthWrapper>{children}</AuthWrapper>
      </body>
    </html>
  );
}
