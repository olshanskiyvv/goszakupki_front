import styles from '../styles/HeaderMaket.module.css'
import { Navigate } from "react-router-dom";

export function HeaderMaket(){
    const onExit = () => {
        localStorage.setItem('user', null);
    }
    return(
        <div className={styles.HeaderMaket}>
            <div className={styles.HeaderMaketHeader}>
            <div className={styles.HeaderLogo}>
                <div className={styles.HeaderLogoImage}>
                <img src="/logo.png" alt="карта из лого" styles/>
            </div>
            </div>
            <div className={styles.LoginButton}>
                <img src="/userpng.png" alt="Личный кабинет" styles/>
                <a href="/account"><p>Личный кабинет</p></a>
            </div>
            </div>

            <div className={styles.HeaderMenu}>
                <a href="#"><p>Планирование</p></a>
                <a href="/catalog"><p>Каталог</p></a>
                <a href="/docpages"><p>Документы</p></a>
            </div>
        </div>
    )
}