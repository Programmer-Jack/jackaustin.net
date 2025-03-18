import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
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
          {/* <h1>// SPACE WESTERN</h1>
          <iframe width="552" height="167" frameborder="0" src="https://itch.io/embed/3367817">
            <a href="https://jackaustin.itch.io/space-western">
              Space Western by Jack Austin
            </a>
          </iframe> */}
        </section>
        <section>
          <h2>// CONNECT WITH ME</h2>
          <div className={styles.socials}>
            <a
              className={styles.primary}
              href="https://jackaustin.itch.io/"
              rel="noopener noreferrer"
            >
              itch.io
            </a>
            <a
              className={styles.secondary}
              href="https://github.com/Programmer-Jack"
              rel="noopener noreferrer"
            >
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
                width={100}
                height={100}
                alt="GitHub logo"
              /> */}
              GitHub
            </a>
            <a
              className={styles.primary}
              href="https://bsky.app/profile/jackaustin.net"
              rel="noopener noreferrer"
            >
              bsky
            </a>
            <a
              className={styles.secondary}
              href="https://linkedin.com/in/iamjackaustin/"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
