import React, { useState } from 'react';
import '../styles/notifications.css';
import { downloadProxy } from '../utils/api';

const Account = () => {
  const [showPersonalCabinet, setShowPersonalCabinet] = useState(false);
  const [showMyDocuments, setShowMyDocuments] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const togglePersonalCabinet = () => setShowPersonalCabinet(!showPersonalCabinet);
  const toggleMyDocuments = () => setShowMyDocuments(!showMyDocuments);

  const handleClick = () => {
    downloadProxy(user.id);
  }
  const [telegramId, setTelegramId] = useState(null)
  const [isTelegramInfoOpen, setIsTelegramOpen] = useState(false);
      const handleTelegramOpen = () => setIsTelegramOpen(true);
      const handleTelegramClose = () => setIsTelegramOpen(false);

  return (
    <div className="container">
      <div className="menu">
        <div className="sidebar">
          <div className="header-container">
            <div className="headerImg">
              <a href='./docpages'>
                <img src="/russia.png" alt="Изображение России" />
              </a>
            </div>
            <div className="header">ЕИС</div>
          </div>
          <div className="personal-cabinet" onClick={togglePersonalCabinet}>
            Личный кабинет
            <img src='/arrow.png' className='arrow' alt="arrow" />
          </div>
          {showPersonalCabinet && (
            <div className="submenu">
              <div onClick={toggleMyDocuments}>
                Мои документы
                <img src='/arrow.png' className='arrow' alt="arrow" />
              </div>
            </div>
          )}
          {showMyDocuments && (
            <div className="submenu nested">
              <div onClick={() => {
                window.location.href = '/necessity';
              }}>Обоснование потребности в закупке</div>
              <div onClick={() => {
                window.location.href = '/notifications';
              }}>Извещения</div>
            </div>
          )}
        </div>
      </div>
      <div className="main">
        <div className="mainProf">
          <div className="main-header">Личный кабинет</div>
          <hr className="separator" />
          <div className="account">
            <div className="justification">Общие данные</div>
            <hr className="separator" />
            <div className="leftSide">
              <p>Фамилия: {user?.surname}</p>
              <p>Имя: {user?.name}</p>
              <p>Отчество: {user?.patronymic}</p>
              <p>Должность: {user?.position.title}</p>
            </div>
            <div className="justification">Подробная информация</div>
            <hr className="separator" />
            <div className="leftSide">
              <p>Номер телефона: {user?.number}</p>
              <p>Электронная почта: {user?.email}</p>
              {user?.organization &&
                <>
                  <p>Организация: {user?.organization?.title}</p>
                  <p>Адрес организации: {user?.organization?.legalAddress}</p>
                </>
              }
            </div>
            <div className='Telegram'>
                <button className="blue-button" onClick={handleTelegramOpen}>
                    Привязать тг-бот
                </button>
                {/* <button className="blue-button_cat">
                    Перейти к подпискам
                </button> */}
                {isTelegramInfoOpen && (
                    <div className="modal">
                        <div className="modal-content">
                        <span className="close" onClick={handleTelegramClose}>&times;</span>
                            <a href="https://t.me/goszakupki_alert_bot" className="aBox">
                            Перейти к боту
                        </a>
                            <h4 className="pBox">или наберите в поиске контактов @goszakupki_alert_bot. Нажмите /start</h4>
                            <input type="text" className="inputBox" placeholder="идентификатор" onChange={(e)=>{setTelegramId(e.target.value)}}/>
                            <h4 className="pBox">введите идентификатор, который вам прислал тг-бот</h4>
                            <button className="blue-button">
                                Привязать
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <button className="blue-button" onClick={handleClick}>Сформировать машиночитаемую доверенность</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
