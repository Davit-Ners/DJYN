'use client';
import { useRouter } from "next/navigation";
import style from './landing.module.css';

export default function LandingPage() {
    const router = useRouter();

    return (
        <div className={style.landingContainer}>
        <video className={style.bgVideo} autoPlay muted loop playsInline>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className={style.overlay}>
            <h1 className={style.logo}>DJYN</h1>
            <p className={style.tagline}>Enter the chaos</p>
            <button className={style.enterBtn} onClick={() => router.push("/home")}>ENTER</button>
        </div>
        </div>
    );
};