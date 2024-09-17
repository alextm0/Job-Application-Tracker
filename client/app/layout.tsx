// app/layout.tsx
"use client";
import UserProvider from "@/providers/UserProvider";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UserProvider> {/* Assuming UserProvider includes ApplicationsProvider */}
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
