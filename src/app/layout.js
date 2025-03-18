// import localFont from "next/font/local";
import styles from "./globals.css";
import Link from "next/link"

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "I AM JACK AUSTIN",
//   description: "Designed by Jack Austin",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"></meta>
        <meta name="description" content="You know what time it is."></meta>
        <meta name="keywords" content="Developer, Games, Unity, Indie"></meta>
        <meta name="author" content="Jack Austin"></meta>
        <title>Jack Austin</title>
      </head>
      <body>
        <header>
          <Link
            href="/"
            rel="nooper noreferrer">
            Home
          </Link>
          <Link
            href="/portfolio"
            rel="nooper noreferrer"
            >
            Portfolio
          </Link>
        </header>
        {children}
        {/* <footer>
          <div className="footer">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquam vel porttitor gravida lobortis augue magna erat. Tristique aptent nisl vel platea ligula habitasse facilisi. Vivamus posuere urna suspendisse massa egestas; felis platea ac. Non mus dis bibendum suspendisse arcu odio, posuere magnis. Imperdiet vestibulum cras elementum sit velit ridiculus nisi mattis.
          </div> 
        </footer> */}
      </body>
    </html>
  );
}
