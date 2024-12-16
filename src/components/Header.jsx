import styles from '../styles/Header.module.css'
import { Navigate } from "react-router-dom";

export function Header(){
    const onExit = () => {
        localStorage.setItem('user', null);
    }
    return(
        <div className={styles.Header}>
            <a href="/profile">Личный кабинет</a>
            <a href="/documents">Документация</a>
            <a className={styles.exitBtn} onClick={onExit} href='/'>Выйти</a>
        </div>
    )
}