import React, { useState } from 'react';
import '../styles/notifications.css';

const Account = () => {
  const [showPersonalCabinet, setShowPersonalCabinet] = useState(false);
  const [showMyDocuments, setShowMyDocuments] = useState(false);


  const togglePersonalCabinet = () => setShowPersonalCabinet(!showPersonalCabinet);
  const toggleMyDocuments = () => setShowMyDocuments(!showMyDocuments);

  return (
    <div className="container">
      <div className="menu">
        <div className="sidebar">
          <div className="header-container">
            <div className="headerImg">
              <img src="/russia.png" alt="Изображение России" />
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
                {/*<p>Фамилия: {user?.surname}</p>
                <p>Имя: {user?.name}</p>
                <p>Отчество: {user?.patronymic}</p>
                <p>Должность: {user?.position.title}</p>*/}
            </div>
            <div className="justification">Подробная информация</div>
            <hr className="separator" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
