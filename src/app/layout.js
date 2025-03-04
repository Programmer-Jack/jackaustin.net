// import localFont from "next/font/local";
import styles from "./globals.css";

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
      <body>
        <main>
          <header>
            <a
              href="/"
              rel="nooper noreferrer">
              Home
            </a>
            <a
              href="/portfolio"
              rel="nooper noreferrer"
              >
             Portfolio
            </a>
          </header>
          {children}
          {/* <footer>
            <div className="footer">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquam vel porttitor gravida lobortis augue magna erat. Tristique aptent nisl vel platea ligula habitasse facilisi. Vivamus posuere urna suspendisse massa egestas; felis platea ac. Non mus dis bibendum suspendisse arcu odio, posuere magnis. Imperdiet vestibulum cras elementum sit velit ridiculus nisi mattis.
            </div> 
          </footer> */}
        </main>
      </body>
    </html>
  );
}
