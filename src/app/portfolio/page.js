import styles from "./page.module.css"
import Image from "next/image"
import roomImage from "/public/the_room.png"
import screenImage from "/public/the_screen.png"

export default function Portfolio() {
    return (
        <div>
            <main>
                <h1>
                    // PORTFOLIO
                </h1>
                
                <Image
                    src={roomImage.src}
                    alt="A room"
                    layout="responsive"
                    width={roomImage.width}
                    height={roomImage.height}
                />
                <Image
                    src={screenImage.src}
                    alt="A building surrounded by screens"
                    layout="responsive"
                    width={screenImage.width}
                    height={screenImage.height}
                />
            </main>
        </div>
    );
}