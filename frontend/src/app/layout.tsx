import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Navbar from "@/components/navbar";

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
        <ClerkProvider>
          <SignedOut>
            <div className="flex flex-col items-center justify-center h-screen">
              <SignInButton />
              <SignUpButton />
            </div>
          </SignedOut>
          <SignedIn>
            <main className="container mx-auto px-4 pt-4 h-(--screen-wo-navbar)">
              {children}
            </main>
            <Navbar />
          </SignedIn>
        </ClerkProvider>
      </body>
    </html>
  );
}
