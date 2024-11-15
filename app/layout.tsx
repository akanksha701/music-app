'use client'
import { ClerkProvider, useUser } from "@clerk/nextjs";
import "./globals.css";
import NavbarPage from "./components/navbar/Navbar";
import { NextUIProvider } from "@nextui-org/react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        <NavbarPage />
            <NextUIProvider>
              {children}
            </NextUIProvider>
        </body>

      </html>
    </ClerkProvider>
  );
}
