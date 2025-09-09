import React from "react";
// import Image from "next/image";
// import styles from "./page.module.css";

// interface LightDarkSocialIconProps {
// 	lightSrc: string;
// 	darkSrc: string;
// 	alt: string;
// }

// function LightDarkSocialIcon({ lightSrc, darkSrc, alt }: LightDarkSocialIconProps): React.JSX.Element {
// 	const isDark = typeof window !== "undefined"
// 		? window.matchMedia("(prefers-color-scheme: dark)").matches
// 		: true;
// 	const imgSrc = isDark ? darkSrc : lightSrc;

// 	return (
// 		<img src={imgSrc}
// 			 alt={alt}
// 		></img>
// 	);
// }

// const itchLight = "/ItchPressKit/logos/itchio-logo-black.svg"
const itchDark = "/ItchPressKit/logos/app-icon.svg"
// const liInLight = "/in-logo/InBug-Black.png"
const liInDark = "/in-logo/InBug-White.png"
// const gitHubLight = "/GitHubLogos/SVG/GitHub_Invertocat_Dark.svg"
const gitHubDark = "/GitHubLogos/SVG/GitHub_Invertocat_Light.svg"
// const igLight = "/IGPressKit/03 Black Glyph/Instagram_Glyph_Black.svg"
const igDark = "/IGPressKit/01 Gradient Glyph/Instagram_Glyph_Gradient.svg";
// const bskyLight = "/BlueskyLogos/bluesky_media_kit_logo.svg";
const bskyDark = "/BlueskyLogos/bluesky_media_kit_logo_3.svg"

export default function Home() {
	return (
		<main>
			<section className="title">
				<h1>Jack Austin</h1>
				<h2>/ Game developer</h2>
			</section>
			<section>
				<p>I&apos;m passionate about building games. / Games are art. / The best games make us want to spend more time exploring the real world. / Games tell stories. / We&apos;ve been telling stories since the beginning of time.</p>
			</section>
			<section className="socials-section">
				<h3>Follow me</h3>
				<div className="socials-grid">
					<div className="social-icon">
						<a rel="noopener noreferrer" href="https://jackaustin.itch.io/">
							{/* <LightDarkSocialIcon
								lightSrc={itchLight}
								darkSrc={itchDark}
								alt="itch.io"
							/> */}
							<img src={itchDark}
								 alt="itch.io"
							></img>
						</a>
					</div>
					<div className="social-icon">
						<a rel="noopener noreferrer" href="https://www.linkedin.com/in/iamjackaustin/">
							{/* <LightDarkSocialIcon
								lightSrc={liInLight}
								darkSrc={liInDark}
								alt="LinkedIn"
							/> */}
							<img src={liInDark}
								 alt="LinkedIn"
							></img>
						</a>
					</div>
					<div className="social-icon">
						<a rel="noopener noreferrer" href="https://github.com/Programmer-Jack">
							{/* <LightDarkSocialIcon
								lightSrc={gitHubLight}
								darkSrc={gitHubDark}
								alt="GitHub"
							/> */}
							<img src={gitHubDark}
								 alt="GitHub"
							></img>
						</a>
					</div>
					<div className="social-icon">
						<a rel="noopener noreferrer" href="https://www.instagram.com/_programmer_jack/">
							{/* <LightDarkSocialIcon
								lightSrc={igLight}
								darkSrc={igDark}
								alt="Instagram"
							/> */}
							<img src={igDark}
								 alt="Instagram"
							></img>
						</a>
					</div>
					<div className="social-icon">
						<a rel="noopener noreferrer" href="https://bsky.app/profile/jackaustin.net">
							{/* <LightDarkSocialIcon
								lightSrc={bskyLight}
								darkSrc={bskyDark}
								alt="bsky"
							/> */}
							<img src={bskyDark}
								 alt="bsky"
							></img>
						</a>
					</div>
				</div>
			</section>
			<section>
				<h3>Gallery</h3>
				<div className="photo-gallery-container">
					<a rel="noopener noreferrer" href="https://jackaustin.itch.io/vector-c">
						<img
							src="/games/vector-c.png"
							alt="Vector-C, a two-player, arcade-style, top-down shooter."
						></img>
					</a>
					<a rel="noopener noreferrer" href="https://jackaustin.itch.io/portal-warpin-robot-killer">
						<img
							src="/games/portal_robot_0.png"
							alt="A brightly glowing orange portal down a concrete corridor"
						></img>
					</a>
					<a rel="noopener noreferrer" href="https://jackaustin.itch.io/space-western">
						<img
							src="/games/space_western.png"
							alt="An inventory lit up by the desert sun"
						></img>
					</a>
					<img
						src="/games/the_room.png"
						alt="A quiet storage room at night, illuminated by a lamp"
					></img>
				</div>
			</section>
		</main>
	);
}
