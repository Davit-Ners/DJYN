import SpotifyIntegrator from '@/components/spotifyIntegrator/spotifyIntegrator';
import style from './homePage.module.css';
import Image from "next/image";
import AboutSection from '@/components/aboutSection/aboutSection';

export default function Home() {
    return (
        <div className={style.pageContainer}>
            <div className={style.leftPage}>
                <div className={style.spotify}>
                    <SpotifyIntegrator />
                </div>

                <div className={style.aboutContainer}>
                    <AboutSection />
                </div>
            </div>
        </div>
    );
};