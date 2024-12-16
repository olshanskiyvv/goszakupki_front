import styles from "../styles/ProfileBody.module.css"
import React, { useState } from 'react'
import { isAuthed } from "../utils/auth";
import { Navigate } from "react-router-dom";


export default function ProfileBody(){
    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [authed, setAuthed] = useState(null)
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSelectChange1 = (event) => setSelectedOption1(event.target.value);
  const handleSelectChange2 = (event) => setSelectedOption2(event.target.value);
    if (authed === null) {
        isAuthed().then(res => setAuthed(res));
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
                <a href="#">Отобразить дополнительную информацию</a>
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
                <select id="option1" value={selectedOption1} onChange={handleSelectChange1}>
                    <option value="">Полномочия</option>
                    <option value="optionA">Option A</option>
                    <option value="optionB">Option B</option>
                </select>
                </div>
                <div>
                <select id="option2" value={selectedOption2} onChange={handleSelectChange2}>
                    <option value="">Обязанности</option>
                    <option value="optionX">Option X</option>
                    <option value="optionY">Option Y</option>
                </select>
                </div>
            </div>

          </div>
        </div>
      )}
            </div>
        </div>
        </>
    )
}