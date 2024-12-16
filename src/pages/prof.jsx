import React, { useState } from 'react';
import '../css/prof.css'
import client from '../utils/client';
import { Navigate } from 'react-router-dom';


export default function Prof(){
    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSelectChange1 = (event) => setSelectedOption1(event.target.value);
  const handleSelectChange2 = (event) => setSelectedOption2(event.target.value);
  const handleLogout = () => {
    alert('Выход');
  };
    return(
        <div className="ProfileBody">
            <header className="app-header">
          <div className="header-left">
            <button className="header-button">Личный кабинет</button>
            <button className="header-button">Документация</button>
          </div>
          <div className="header-right">
            <button className="header-button" onClick={handleLogout}>
              Выйти
            </button>
          </div>
        </header>
            <div className="leftSide">
                <p>Иванов</p>
                <p>Иван</p>
                <p>Иванович</p>
                <p>Должность</p>
                <a href="#">Отобразить дополнительную информацию</a>
            </div>

            <div className="rightSide">
                <button className="ShowBtn" onClick={handleOpen}>
                        Отобразить <br/>
                        Машиночитаемую <br/>
                        Доверенность
                </button>

                {isOpen && (
        <div className="modal">
          <div className="modalContent">
            <span className="close" onClick={handleClose}>&times;</span>
            <div className="modalBody">
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
    )
}