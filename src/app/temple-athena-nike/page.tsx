import Link from "next/link";
import Image from "next/image";

import Render0 from 'public/temple-athena-nike/render0.png'
import Render1 from 'public/temple-athena-nike/render1.png'
import Render2 from 'public/temple-athena-nike/render2.png'
import Render3 from 'public/temple-athena-nike/render3.png'
import Render4 from 'public/temple-athena-nike/render4.png'
import Render5 from 'public/temple-athena-nike/render5.png'

export default function Page() {
    return (
        <main>
            <section>
                <h3>Model of the Temple of Athena Nike (2026)</h3>
                <p>
                    These are renders of the Temple of Athena Nike. I created them in Blender for ARH 2050, an art history class I took through Valencia College while studying at the University of Central Florida.
                    <br/><br/>
                </p>
                <div className="photo-gallery-container">
                    <Image
                        src={Render1}
                        alt="."
                    />
                    <Image
                        src={Render2}
                        alt="."
                    />
                    <Image
                        src={Render3}
                        alt="."
                    />
                    <Image
                        src={Render4}
                        alt="."
                    />
                    <Image
                        src={Render5}
                        alt="."
                    />                    
                </div>

            </section>
        </main>
    );
}