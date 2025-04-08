import Image from "next/image";
import Link from "next/link";
import style from './mediaLinks.module.css';
import { socialMedias, SocialMedias } from "@/services/socialMedias";

export default function MediaLinks() {
    
    return (
        <div className={style.linkContainer}>
            {socialMedias.map(({name, url}) => (
                <Link target="_blank" key={name} href={url}>
                    <Image
                        alt={`Logo de ${name}`}
                        src={`/${name}.svg`}
                        width={45}
                        height={45}
                        className={style.test}
                    />
                </Link>
            ))}
        </div>
    );
};