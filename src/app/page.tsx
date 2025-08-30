import Image from "next/image";
// import styles from "./page.module.css";
// import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <h1>Jack Austin</h1>
        <h2>Game developer</h2>
      </section>
      <section className="text-section">
        <p>I&apos;m passionate about building games. </p>
      </section>
      <section>
        <h3>Follow my socials</h3>
        <div className="socials-flex">
          <div className="social-icon">
            <a href="https://jackaustin.itch.io/">
              <Image src="/ItchPressKit/logos/app-icon.svg" alt="itch.io" fill={true} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/iamjackaustin/">
              <Image src="/in-logo/InBug-White.png" alt="LinkedIn" fill={true} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://github.com/Programmer-Jack">
              <Image src="/GitHubLogos/SVG/GitHub_Invertocat_Light.svg" alt="GitHub" fill={true} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.instagram.com/_programmer_jack/">
              <Image src="/IGPressKit/01 Gradient Glyph/Instagram_Glyph_Gradient.svg" alt="Instagram" fill={true} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://bsky.app/profile/jackaustin.net">
              <Image src="/BlueskyLogos/bluesky_media_kit_logo_1.svg" alt="bsky" fill={true} />
            </a>
          </div>
        </div>
        {/* <h3>Play my latest game</h3> */}
        {/* <iframe frameBorder="0" src="https://itch.io/embed/3759571?bg_color=191919&amp;fg_color=ffffff&amp;link_color=ff7106&amp;border_color=333333" width="552" height="167"><a href="https://jackaustin.itch.io/portal-warpin-robot-killer">Portal Warpin' Robot Killer by Jack Austin</a></iframe> */}
      </section>
    </main>
  );
}
