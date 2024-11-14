import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavbarPage from "./components/navbar/Navbar";
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
