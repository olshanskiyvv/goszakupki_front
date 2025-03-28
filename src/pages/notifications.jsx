import React, { useEffect, useState } from 'react';
import '../styles/notifications.css';
import { downloadNotification, getPurchases } from '../utils/api';

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPurchases, setSelectedPurchases] = useState("");
  const [showPersonalCabinet, setShowPersonalCabinet] = useState(false);
  const [showMyDocuments, setShowMyDocuments] = useState(false);
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    getPurchases()
    .then((dataList) => {
      // console.log(dataList);
      setPurchases(dataList);
    })
    .catch(e => console.log(e));
  }, [])

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const togglePersonalCabinet = () => setShowPersonalCabinet(!showPersonalCabinet);
  const toggleMyDocuments = () => setShowMyDocuments(!showMyDocuments);

  const handleSelectPurchase = (event) => {
    setSelectedPurchases(event.target.value);
  };
    const handleDownload = () => {
      const number = purchases.find(item => (item.id == selectedPurchases));
      downloadNotification(
        selectedPurchases,
        number?.number,
      );
    };

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
          <div className="justification-header">Извещениe</div>
          {/* <input type="text" placeholder="Введите номер документа" className="search-bar" />
          <div className="files">
            <div className="file">
              <img src="/word.png" alt="file-icon" /> Извещениe №1925
            </div>
            <div className="file">
              <img src="/word.png" alt="file-icon" /> Извещениe №2368
            </div>
            <div className="file">
              <img src="/word.png" alt="file-icon" /> Извещениe №5734
            </div>
          </div> */}
          <button className="blue-button" onClick={handleOpen}>Сформировать документ</button>

          {isOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <h2>Формирование документа</h2>
                <select value={selectedPurchases} onChange={handleSelectPurchase}>
                  <option value="" className="default-option">В выпадающем списке выберите нужный код закупки</option>
                  {purchases.map((d) => <option value={d.id}>{`${d.number} - ${d.object}`}</option>)}
                </select>
                <button className="blue-button" onClick={handleDownload}>Сформировать документ</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
