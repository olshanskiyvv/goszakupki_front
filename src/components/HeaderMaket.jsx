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
                <img src="/userpng.png" alt="карта из лого" styles/>
                <div className={styles.HeaderLogoTxt}>
                    <p className={styles.eisTxt}>ЕИС</p>
                    <p>ЗАКУПКИ</p>
                </div>
            </div>
            </div>
            <div className={styles.LoginButton}>
                <img src="/userpng.png" alt="карта из лого" styles/>
                <a href="#"><p>Личный кабинет</p></a>
            </div>
            </div>

            <div className={styles.HeaderMenu}>
                <a href="#"><p>Планирование</p></a>
                <a href="#"><p>Каталог</p></a>
                <a href="#"><p>Документы</p></a>
            </div>
        </div>
    )
}