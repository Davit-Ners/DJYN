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
            </div>

            <div className={style.rightPage}>
                <h2 className={style.sectionTitle}>🎥 Official Music Video</h2>
                <div className={style.youtube}>
                    <YoutubeIntegrator />
                </div>
            </div>
        </div>
    );
};