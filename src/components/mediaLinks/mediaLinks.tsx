import Image from "next/image";
import Link from "next/link";
import style from './mediaLinks.module.css';

export default function MediaLinks() {

    const socialIcon = ['instagram', 'facebook', 'tiktok', 'youtube', 'spotify']
    
    return (
        <div className={style.linkContainer}>
            {socialIcon.map(icon => (
                <Link target="_blank" key={icon} href=''>
                    <Image
                        alt={`Logo de ${icon}`}
                        src={`/${icon}.svg`}
                        width={45}
                        height={45}
                        className={style.test}
                    />
                </Link>
            ))}
        </div>
    );
};