import SpotifyIntegrator from '@/components/spotifyIntegrator/spotifyIntegrator';
import style from './homePage.module.css';
import Image from "next/image";

export default function Home() {
    return (
        <div className={style.pageContainer}>
            <div className={style.spotify}>
                <SpotifyIntegrator />
            </div>
        </div>
    );
};