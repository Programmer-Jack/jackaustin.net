import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import VectorCImage from 'public/games/vector-c.png'
import PortalWarpinImage from 'public/games/portal_robot_0.png'
import SpaceWesternImg from 'public/games/space_western.png'
import TheRoomImg from 'public/games/the_room.png'

const itch = '/logos/itch/app-icon.svg'
const liIn = '/logos/liin/InBug-White.png'
const ig = '/logos/ig/Instagram_Glyph_Gradient.png';
const github = 'https://cdn.simpleicons.org/github/fff?viewbox=auto'
const bsky = 'https://cdn.simpleicons.org/bluesky?viewbox=auto'
const yt = 'https://cdn.simpleicons.org/youtube?viewbox=auto'

export default function Home() {
	return (
		<main>
			<section>
				<h3>Latest tutorial</h3>
				{/* 
					Source - https://stackoverflow.com/Link/20130011
					Posted by Simone Lazzari, modified by community. See post 'Timeline' for change history
					Retrieved 2026-06-10, License - CC BY-SA 4.0
				*/}
				<div className="wrapper wrapper-yt">
					<div className="h_iframe h_iframe-yt">
						<iframe width={2} height={2} src="https://www.youtube.com/embed/TdvbNz5dkeI?si=Oz8ShNa0j97fgMzl" title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
						</iframe>
					</div>
				</div>
			</section>
			<section>
				<h3>Follow me</h3>
				<div className="socials-grid">
					<div className="social-icon">
						<Link rel="noopener noreferrer" href="https://jackaustin.itch.io/">
							<img src={itch}
								alt="itch.io"
							/>
						</Link>
					</div>
					<div className="social-icon">
						<Link rel="noopener noreferrer" href="https://www.linkedin.com/in/iamjackaustin/">
							<img src={liIn}
								alt="LinkedIn"
							/>
						</Link>
					</div>
					<div className="social-icon">
						<Link rel="noopener noreferrer" href="https://github.com/Programmer-Jack">
							<img src={github}
								alt="GitHub"
							/>
						</Link>
					</div>
					<div className="social-icon">
						<Link rel="noopener noreferrer" href="https://bsky.app/profile/jackaustin.net">
							<img src={bsky}
								alt="bsky"
							/>
						</Link>
					</div>
					<div className="social-icon">
						<Link rel="noopener noreferrer" href="https://www.instagram.com/_programmer_jack/">
							<img src={ig}
								alt="Instagram"
							/>
						</Link>
					</div>
					<div className="social-icon">
						<Link rel="noopener noreferrer" href="https://www.youtube.com/@iamjackaustin">
							<img src={yt}
								alt="YouTube"
							/>
						</Link>
					</div>
				</div>
			</section>
			<section>
				<h3>Gallery</h3>
				<div className="photo-gallery-container">
					<Link rel="noopener noreferrer" href="https://jackaustin.itch.io/vector-c">
						<Image
							src={VectorCImage}
							alt="Vector-C, Link two-player, arcade-style, top-down shooter."
						/>
					</Link>
					<Link rel="noopener noreferrer" href="https://jackaustin.itch.io/portal-warpin-robot-killer">
						<Image
							src={PortalWarpinImage}
							alt="A brightly glowing orange portal down Link concrete corridor"
						/>
					</Link>
					<Link rel="noopener noreferrer" href="https://jackaustin.itch.io/space-western">
						<Image
							src={SpaceWesternImg}
							alt="An inventory lit up by the desert sun"
						/>
					</Link>
					<Image
						src={TheRoomImg}
						alt="A quiet storage room at night, illuminated by Link lamp"
					/>
				</div>
			</section>
		</main>
	);
}