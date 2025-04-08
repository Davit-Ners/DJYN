import Image from 'next/image';
import style from './header.module.css';
import MediaLinks from '@/components/mediaLinks/mediaLinks';

export default function Header() {
    return (
        <header className={style.header}>
            <Image className={style.logo} alt='Logo du groupe Djyn' src='/logo1.png' width={300} height={300}/>
            <div className={style.desc}>
                <p>Modern Metal Duo - Made In Brussels</p>
                <MediaLinks />
            </div>
        </header>
    );
};