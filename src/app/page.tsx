import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <h1>Jack Austin</h1>
          <p>Super Graphic Ultra Modern Games</p>
          <div className="hero-buttons">
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/resume">Resume</Link>
          </div>
        </div>
      </section>
      {/* <section className="style-invert"> */}
        <div><p>Lorem ipsum dolor sit amet dolorosa asdasdh ashdfui asdfjhafkls a a a a a a a</p></div>
        <div className="socials-flex">
          <div className="social-icon">
            <a href="https://jackaustin.itch.io/">
              <Image src="/ItchPressKit/logos/itchio-logo-white.svg" alt="itch.io" fill={true} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/iamjackaustin/">
              <Image src="/in-logo/InBug-White.png" alt="LinkedIn" fill={true} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://bsky.app/profile/jackaustin.net">
              <Image src="/BlueskyLogos/bluesky_media_kit_logo_transparent_2.png" alt="bsky" fill={true} />
            </a>
            </div>
          <div className="social-icon">
            <a href="https://github.com/Programmer-Jack">
              <Image src="/GitHubLogos/SVG/GitHub_Invertocat_Light.svg" alt="GitHub" fill={true} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.instagram.com/_programmer_jack/">
              <Image src="/IGPressKit/02 White Glyph/Instagram_Glyph_White.svg" alt="Instagram" fill={true} />
            </a>
          </div>
        </div>
      {/* </section> */}
    </main>
  );
}
