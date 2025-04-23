import SpotifyIntegrator from '@/components/spotifyIntegrator/spotifyIntegrator';
import style from './homePage.module.css';
import Image from "next/image";
import AboutSection from '@/components/aboutSection/aboutSection';
import YoutubeIntegrator from '@/components/youtubeIntegrator/youtubeIntegrator';

export default function Home() {
    return (
        <div className={style.pageContainer}>
            <div className={style.leftPage}>
                <h2 className={style.sectionTitle}>🎧 Listen on Spotify</h2>
                <div className={style.spotify}>
                    <SpotifyIntegrator />
                </div>

                <h2 className={style.sectionTitle}>🧬 About DJYN</h2>
                <div className={style.aboutContainer}>
                    <AboutSection />
                </div>

                <h2 className={style.sectionTitle}>📅 Upcoming Shows</h2>
                <div className={style.concerts}>
                    <ul>
                        <li><span>03 May 2025</span> — Botanique, Brussels</li>
                        <li><span>18 May 2025</span> — Le Ferrailleur, Nantes</li>
                        <li><span>31 May 2025</span> — L’Usine, Genève</li>
                    </ul>
                </div>
            </div>

            <div className={style.rightPage}>
                <h2 className={style.sectionTitle}>🎥 Official Music Video</h2>
                <div className={style.youtube}>
                    <YoutubeIntegrator />
                </div>

                <blockquote className={style.quoteBlock}>
                    “We don't just play metal — we create emotional chaos.”
                </blockquote>

                <h2 className={style.sectionTitle}>🛒 Merch</h2>
                <div className={style.merch}>
                    <p>🔥 Official DJYN merch is coming soon. Stay tuned!</p>
                </div>
            </div>
        </div>
    );
};