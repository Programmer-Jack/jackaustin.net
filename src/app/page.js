import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>
          // I AM JACK AUSTIN.
        </h1>
        <div>
          <p>
            I like to make games.
          </p>
          <p>
            More to come.
          </p>
          {/* <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquam vel porttitor gravida lobortis augue magna erat. Tristique aptent nisl vel platea ligula habitasse facilisi. Vivamus posuere urna suspendisse massa egestas; felis platea ac. Non mus dis bibendum suspendisse arcu odio, posuere magnis. Imperdiet vestibulum cras elementum sit velit ridiculus nisi mattis.
          </p>
          <p>
            Morbi maximus vivamus proin phasellus hac iaculis conubia dis dictumst. Montes est hac ad volutpat ullamcorper; fames eu. Ante nulla accumsan imperdiet eleifend, fames pulvinar platea netus consectetur. Elementum condimentum vitae nec efficitur pretium mauris. Laoreet tempor id nunc finibus consectetur dictum lobortis odio litora. Dapibus ullamcorper leo vitae curabitur tristique pharetra ultricies conubia. Maecenas varius velit porttitor nunc cursus vel aptent. Varius fermentum eros justo parturient conubia neque maecenas.
          </p>
          <p>
            Semper pellentesque tellus in hac ornare rhoncus. Viverra tortor pretium cursus sapien dis. Dui ullamcorper maecenas maximus nostra himenaeos nisl maecenas. Velit venenatis lectus volutpat commodo hac. Maximus dapibus congue interdum quisque ornare. Arcu lobortis integer sollicitudin libero tempor magna cubilia congue etiam.
          </p>
          <p>
            Ut feugiat feugiat ut nulla blandit praesent congue. Nascetur fames auctor magna facilisis dui mi netus. Eleifend varius velit luctus ornare ad bibendum nullam. Habitasse facilisis gravida pellentesque congue dictumst potenti finibus. Phasellus orci leo pulvinar; volutpat eros aenean mauris etiam adipiscing. Egestas class elit; pretium rhoncus porttitor ultrices. Nunc ligula torquent mi mollis mattis mattis urna eu nullam.
          </p>
          <p>
            Magna fames neque placerat imperdiet hendrerit velit. Consectetur curabitur posuere aliquet sodales porttitor. Diam dignissim vehicula pharetra urna, praesent taciti cras vehicula proin. Eleifend varius ultrices dis montes; sapien maecenas. Erat montes purus nunc, convallis volutpat finibus. Sodales libero euismod congue primis, turpis viverra pellentesque euismod ex. Iaculis dictum velit dui volutpat habitasse penatibus dui. Venenatis lacus interdum primis proin aptent tellus pretium.
          </p> */}
        </div>
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
            GitHub
          </a>
          <a
            className={styles.secondary}
            href="https://bsky.app/profile/jackaustin.net"
            rel="noopener noreferrer"
          >
            bsky
          </a>
        </div>
      </main>
    </div>
  );
}
