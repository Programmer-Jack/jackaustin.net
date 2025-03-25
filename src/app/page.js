import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <h1>// I AM JACK AUSTIN</h1>
        <section>
          <h2>
            // What do you do, Jack Austin?
          </h2>
          <p>
            I like to make games.
          </p>
          <p>
            More to come.
          </p>
        </section>
        <section>
          <h2>// CONNECT WITH ME</h2>
          <div className={styles.socials}>
            <Link
              className={styles.primary}
              href="https://jackaustin.itch.io/"
              rel="noopener noreferrer"
            >
              itch.io
            </Link>
            <Link
              className={styles.primary}
              href="https://github.com/Programmer-Jack"
              rel="noopener noreferrer"
            >
              <div className={styles.iconContainer}>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
                  fill={true}
                  alt="GitHub logo"
                />
              </div>
              GitHub
            </Link>
            <Link
              className={styles.primary}
              href="https://linkedin.com/in/iamjackaustin/"
            >
              LinkedIn
            </Link>
            <Link
              className={styles.secondary}
              href="https://bsky.app/profile/jackaustin.net"
              rel="noopener noreferrer"
            >
              bsky
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
