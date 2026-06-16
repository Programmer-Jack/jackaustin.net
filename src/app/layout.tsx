import type { Metadata } from "next";
import Link from "next/link";
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
        <header className="title">
				  <h1>Jack Austin</h1>
          <p>
            <em>
              makes <Link rel="noopener noreferrer" href="https://jackaustin.itch.io/">games</Link>, not websites!
            </em>
          </p>
        </header>
        <section>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/portal-warpin-robot-killer">Portal Warpin&apos; Robot Killer</Link>
            <Link href="/projects">Projects</Link>
          </nav>
        </section>
        {children}
      </body>
    </html>
  );
}
