import Image from 'next/image';
import style from './header.module.css';

export default function Header() {
    return (
        <header className={style.header}>
            <Image alt='Logo du groupe Djyn' src='/logo.png' width={400} height={400}/>
            <div className={style.desc}>
                <p>Modern Metal Duo - Made In Brussels</p>
            </div>
        </header>
    );
};