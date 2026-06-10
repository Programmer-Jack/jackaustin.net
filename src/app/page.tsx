import React from "react";

const itchDark = "/ItchPressKit/logos/app-icon.svg"
const liInDark = "/in-logo/InBug-White.png"
const gitHubDark = "/GitHubLogos/SVG/GitHub_Invertocat_Light.svg"
const igDark = "/ig/gradient/Instagram_Glyph_Gradient.png";
const bskyDark = "/bsky/bluesky_media_kit_logo_3.svg"
const ytIcon = "/youtube-icon/01-red/yt_icon_red_digital.png"

export default function Home() {
	return (
		<main>
			<section>
				<h3>Latest tutorial</h3>
				{/* 
					Source - https://stackoverflow.com/a/20130011
					Posted by Simone Lazzari, modified by community. See post 'Timeline' for change history
					Retrieved 2026-06-10, License - CC BY-SA 4.0
				*/}
				<div className="wrapper">
					<div className="h_iframe">
						<iframe width={2} height={2} src="https://www.youtube.com/embed/TdvbNz5dkeI?si=Oz8ShNa0j97fgMzl" title="YouTube video player" frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
						</iframe>
					</div>
				</div>
			</section>
			<section className="socials-section">
				<h3>Follow me</h3>
				<div className="socials-grid">
					<div className="social-icon">
						<a rel="noopener noreferrer" href="https://jackaustin.itch.io/">
							<img src={itchDark}
								alt="itch.io"
							/>
						</a>
					</div>
					<div className="social-icon">
						<a rel="noopener noreferrer" href="https://www.linkedin.com/in/iamjackaustin/">
							<img src={liInDark}
								alt="LinkedIn"
							/>
						</a>
					</div>
					<div className="social-icon">
						<a rel="noopener noreferrer" href="https://github.com/Programmer-Jack">
							<img src={gitHubDark}
								alt="GitHub"
							/>
						</a>
					</div>
					<div className="social-icon">
						<a rel="noopener noreferrer" href="https://www.instagram.com/_programmer_jack/">
							<img src={igDark}
								alt="Instagram"
							/>
						</a>
					</div>
					<div className="social-icon">
						<a rel="noopener noreferrer" href="https://bsky.app/profile/jackaustin.net">
							<img src={bskyDark}
								alt="bsky"
							/>
						</a>
					</div>
					<div className="social-icon">
						<a rel="noopener noreferrer" href="https://www.youtube.com/@iamjackaustin">
							<img src={ytIcon}
								alt="YouTube"
							/>
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
						/>
					</a>
					<a rel="noopener noreferrer" href="https://jackaustin.itch.io/portal-warpin-robot-killer">
						<img
							src="/games/portal_robot_0.png"
							alt="A brightly glowing orange portal down a concrete corridor"
						/>
					</a>
					<a rel="noopener noreferrer" href="https://jackaustin.itch.io/space-western">
						<img
							src="/games/space_western.png"
							alt="An inventory lit up by the desert sun"
						/>
					</a>
					<img
						src="/games/the_room.png"
						alt="A quiet storage room at night, illuminated by a lamp"
					/>
				</div>
			</section>
		</main>
	);
}
