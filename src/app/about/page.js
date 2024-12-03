import styles from "../page.module.css"

export default function About() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>
                    // I AM JACK AUSTIN.
                </h1>
                <p>
                    Howdy. I'm a computer scientist and a musician.
                </p>
            </main>
        </div>
    );
}