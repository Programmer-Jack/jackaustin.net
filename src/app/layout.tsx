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
        <header className="title">
				  <h1>Jack Austin</h1>
          <p>
            <em>
              makes <a rel="noopener noreferrer" href="https://jackaustin.itch.io/">games</a>, not websites!
            </em>
          </p>
        </header>
        <section>
          <nav className="header-menu">
            <p><em>paths:</em></p>
            <a href="/">/</a>
            <a href="/portal-warpin-robot-killer">/portal-warpin-robot-killer</a>
          </nav>
        </section>
        {children}
      </body>
    </html>
  );
}
