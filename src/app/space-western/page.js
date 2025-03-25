import styles from "./page.module.css"
import Image from "next/image"

export default function Portfolio() {
    return (
        <div>
            <main class={styles.main}>
                <h1>
                    // SPACE WESTERN
                </h1>
                <section>
                    <h1>// SPACE WESTERN</h1>
                    <iframe width="552" height="167" frameBorder="0" src="https://itch.io/embed/3367817">
                        <a href="https://jackaustin.itch.io/space-western">
                        Space Western by Jack Austin
                        </a>
                    </iframe>
                </section>
            </main>
        </div>
    );
}