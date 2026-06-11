// 'use client';

// import { usePathname } from "next/navigation";

export default function Page() {
    // const pathname = usePathname();
    return (
        <main>
            <section>
                <h3>Portal Warpin' Robot Killer (2025)</h3>
                {/* 
                    Source - https://stackoverflow.com/a/20130011
                    Posted by Simone Lazzari, modified by community. See post 'Timeline' for change history
                    Retrieved 2026-06-10, License - CC BY-SA 4.0
                */}
                {/* <div className="wrapper wrapper-itch">
                    <div className="h_iframe h_iframe-itch">
                        <iframe src="https://itch.io/embed/3759571?border_width=0&amp;bg_color=004651&amp;fg_color=2ce8f4&amp;link_color=2ce8f4&amp;border_color=2ce8f4" width="2" height="2">
                        </iframe>
                    </div>
                </div> */}
                <iframe src="https://itch.io/embed/3759571?border_width=0&amp;bg_color=004651&amp;fg_color=2ce8f4&amp;link_color=2ce8f4&amp;border_color=2ce8f4" width="550" height="165">
                </iframe>
                <p>
                    <a rel="noopener noreferrer" href="https://github.com/Programmer-Jack/portal-warpin-robot-killer">https://github.com/Programmer-Jack/portal-warpin-robot-killer</a>
                </p>
            </section>
        </main>
    );
}