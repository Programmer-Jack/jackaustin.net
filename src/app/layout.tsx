import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jack Austin",
  description: "You know what time it is.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/"/>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
