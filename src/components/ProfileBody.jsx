import styles from "../styles/ProfileBody.module.css"
import React, { useState } from 'react'
import { isAuthed } from "../utils/auth";
import { Navigate } from "react-router-dom";
import { linkTelegram } from "../utils/api";


export default function ProfileBody(){
    const [isOpen, setIsOpen] = useState(false);
  const [selectedAuthority, setSelectedAuthority] = useState('');
  const [selectedDuty, setSelectedDuty] = useState('');
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [authed, setAuthed] = useState(null)
    const [telegramId, setTelegramId] = useState(null)
    const [isAdditionalInfoOpen, setIsAdditionalInfoOpen] = useState(false); 
  const handleAdditionalInfoOpen = () => setIsAdditionalInfoOpen(true);
  const handleAdditionalInfoClose = () => setIsAdditionalInfoOpen(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
    const [isTelegramInfoOpen, setIsTelegramOpen] = useState(false);
    const handleTelegramOpen = () => setIsTelegramOpen(true);
    const handleTelegramClose = () => setIsTelegramOpen(false);
    const handleTelegramLink = () => {
        linkTelegram(telegramId, user.id)
        .then(() => {
            alert("Телеграм привязан");
            handleTelegramClose();
        })
    }

  const handleSelectAuthority = (event) => {
    setSelectedAuthority(event.target.value)

};
  const handleSelectDuty = (event) => {
    setSelectedDuty(event.target.value)
};
    if (authed === null) {
        isAuthed().then(res => setAuthed(res));
        console.log(user)
    }

  if (authed !== null && authed === false) {
    return <Navigate to='/' replace/>
  }
    return(<>
        <div className={styles.ProfileBody}>
            <div className={styles.leftSide}>
                <p>{user?.surname}</p>
                <p>{user?.name}</p>
                <p>{user?.patronymic}</p>
                <p>{user?.position.title}</p>
                <a onClick={handleAdditionalInfoOpen}>Отобразить дополнительную информацию</a>
            </div>
            <div className='Telegram'>
                <button className={styles.btnMini} onClick={handleTelegramOpen}>
                    Привязать тг-бот
                </button>
                {isTelegramInfoOpen && (
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                        <span className={styles.close} onClick={handleTelegramClose}>&times;</span>
                            <a href="https://t.me/goszakupki_alert_bot" className={styles.aBox}>
                            Перейти к боту
                        </a>
                            <h4 className={styles.pBox}>или наберите в поиске контактов @goszakupki_alert_bot. Нажмите /start</h4>
                            <input type="text" className={styles.inputBox} placeholder="идентификатор" onChange={(e)=>{setTelegramId(e.target.value)}}/>
                            <h4 className={styles.pBox}>введите идентификатор, который вам прислал тг-бот</h4>
                            <button className={styles.btnMiniID} onClick={handleTelegramLink}>
                                Привязать идентификатор
                            </button>
                        </div>
                    </div>
                )}
            </div>


            <div className="rightSide">
                <button className={styles.ShowBtn} onClick={handleOpen}>
                        Отобразить <br/>
                        Машиночитаемую <br/>
                        Доверенность
                </button>

                {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleClose}>&times;</span>
            <div className={styles.modalBody}>
                <h2>Машиночитаемая доверенность</h2>
                <div>
                <select id="option1" value={selectedAuthority} onChange={handleSelectAuthority}>
                    <option value="">Полномочия</option>
                    {user?.authorities.map(a => <option value={a.id}>{a.header}</option>)}
                </select>
                    <div>{user?.authorities.find(a => a.id == selectedAuthority)?.description}</div>
                </div>
                <div>
                <select id="option2" value={selectedDuty} onChange={handleSelectDuty}>
                    <option value="">Обязанности</option>
                    {user?.dutyList.map(d => <option value={d.id}>{d.header}</option>)}
                </select>
                    <div>{user?.dutyList.find(d => d.id == selectedDuty)?.description}</div>
                </div>
            </div>
          </div>
        </div>
      )}
                {isAdditionalInfoOpen && (
                    <div className="additional-info-modal">
                        <div className="additional-info-modal-content">
                            <span className="close" onClick={handleAdditionalInfoClose}>
                                &times;
                            </span>
                            <h2>Дополнительная информация</h2>
                            <ul>
                                <li>Телефон: {user?.number}</li>
                                <li>Почта: {user?.email}</li>
                                <li>Организация: {user?.organization.title}</li>
                                <li>Юридическое лицо: {user?.legalEntity ? 'Да' : 'Нет'}</li>
                                <li>Роль в системе: {user?.role == 'ADMIN' ? 'Заказчик' : 'Поставщик'}</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}