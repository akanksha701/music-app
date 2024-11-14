import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
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
          <NextUIProvider>
          {children}
          </NextUIProvider>

        </body>

      </html>

    </ClerkProvider>
  );
}
