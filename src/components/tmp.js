import '../css/doc.css'

import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';

import client from '../utils/client';

function Doc() {
  const [selectedDocumentType, setSelectedDocumentType] = useState('');
  const [selectedDocumentNumber, setSelectedDocumentNumber] = useState('');
  const [selectedDocumentDate, setSelectedDocumentDate] = useState('');

  const documentTypes = [
    'Документ на закупку №13-259',
  ];

  const documentNumbers = [
    'Документ об извещении №13-259',
  ];

  const documentDates = [
    'Обоснование цены №13-259',
  ];


  const handleDocumentTypeChange = (e) => {
    setSelectedDocumentType(e.target.value);
  };

  const handleDocumentNumberChange = (e) => {
    setSelectedDocumentNumber(e.target.value);
  };

  const handleDocumentDateChange = (e) => {
    setSelectedDocumentDate(e.target.value);
  };

  const handleGenerateReport = () => {
    if (selectedDocumentType && selectedDocumentNumber &&
        selectedDocumentDate) {
      alert("Генерируется отчет для документа: ${selectedDocumentType}, номер ${selectedDocumentNumber}, дата ${selectedDocumentDate}");
    } else {
      alert('Выберите все поля');
    }
  };


  const handleLogout = () => {
    alert('Выход');
  };

    return (
      <div className='app-container'>
        <main className='app-main'>
        <div className='document-section'>
          <div>
            <label htmlFor='documentTypeSelect'>Документ №1</label>
            <select
              id="documentTypeSelect"
              value={selectedDocumentType}
              onChange={handleDocumentTypeChange}
            >
              <option value="">Выберите документ</option>
              {documentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="documentNumberSelect">Документ №2</label>
            <select
    id = 'documentNumberSelect'
              value={selectedDocumentNumber}
              onChange={handleDocumentNumberChange}
            >
              <option value=''>Выберите документ</option>
              {documentNumbers.map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor='documentDateSelect'>Документ №3</label>
            <select
              id="documentDateSelect"
              value={selectedDocumentDate}
              onChange={handleDocumentDateChange}
            >
              <option value="">Выберите документ</option>
              {documentDates.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>
          <button className="generate-button" onClick={handleGenerateReport}>
            Сгенерировать отчет
          </button>
        </div>
      </main>
      </div>
    );
  }
  
  export default Doc;