import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
            <div className="flex flex-col items-center justify-start h-screen gap-36 pt-10">
              <Image src={"/logo.png"} alt="Logo" width={100} height={200} />
              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col items-center gap-2">
                  <p>Create your account</p>
                  <SignUpButton>
                    <Button className="bg-(--blue) w-36">Sign up</Button>
                  </SignUpButton>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p>Already have an account?</p>
                  <SignInButton>
                    <Button className="w-36">Log in</Button>
                  </SignInButton>
                </div>
              </div>
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
