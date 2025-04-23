import style from './footer.module.css';

export default function Footer() {
    return (
        <footer className={style.footer}>
                <p>© {new Date().getFullYear()} DJYN. All rights reserved.</p>
        </footer>
    );
};