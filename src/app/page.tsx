import SpotifyIntegrator from '@/components/spotifyIntegrator/spotifyIntegrator';
import style from './homePage.module.css';
import AboutSection from '@/components/aboutSection/aboutSection';
import YoutubeIntegrator from '@/components/youtubeIntegrator/youtubeIntegrator';
import StatsSection from '@/components/statsSection/statsSection';
import GallerySection from '@/components/gallerySection/gallerySection';
import ConcertsSection from '@/components/concertsSection/concertsSection';

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

                <StatsSection />

                <h2 className={style.sectionTitle}>📅 Upcoming Shows</h2>
                <div className={style.concerts}>
                    <ConcertsSection />
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

                <h2 className={style.sectionTitle}>📩 Contact</h2>
                <div className={style.merch}>
                    <p className={style.contactLine}>
                        For booking & inquiries, email us at <a href="mailto:djynband@gmail.com">djynband@gmail.com</a>
                    </p>
                </div>

                <GallerySection />
            </div>
        </div>
    );
};