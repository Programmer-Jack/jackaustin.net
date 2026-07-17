import Link from "next/link";

export default function Page() {
    return (
        <main>
            <section>
                <h3>Projects Directory</h3>
                <h4>Games</h4>
                <p>
                    <Link rel="noopener noreferrer" href="/portal-warpin-robot-killer">Portal Warpin' Robot Killer (2025)</Link>
                    <br/><br/>
                </p>
                <h4>Modeling</h4>
                <p>
                    <Link rel="noopener noreferrer" href="/temple-athena-nike">Model of the Temple of Athena Nike (2026)</Link>
                </p>
            </section>
        </main>
    );
}