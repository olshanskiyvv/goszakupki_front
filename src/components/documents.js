import React, { useState } from 'react';
import '../css/doc.css'
import { Navigate } from 'react-router-dom';
import { isAuthed } from '../utils/auth';
import { downloadReport, getPurchases } from '../utils/api';

function Doc() {
  const [selectedDocumentType, setSelectedDocumentType] = useState('');
    const [selectedDocumentId, setSelectedDocumentId] = useState('');
    const [selectedDocumentNumber, setSelectedDocumentNumber] = useState('');
    // const [selectedDocumentDate, setSelectedDocumentDate] = useState('');
    
    const [authed, setAuthed] = useState(null)
    const reportTypes = [
      {key: 'purchase', value: 'Документ на закупку'},
      {key: 'notification', value: 'Документ об извещении'},
      {key: 'price_justification', value: 'Обоснование цены'},
    ];
    const [purchases, setPurchases] = useState(null);
    if (purchases === null) {
        getPurchases().then(data => setPurchases(data)).catch(e => console.log(e));
    }
  
    const handleDocumentTypeChange = (e) => {
      setSelectedDocumentType(e.target.value);
    };
  
    const handleDocumentNumberChange = (e) => {
      setSelectedDocumentId(e.target.value);
        const number = purchases.find(p => p.id == e.target.value).number;
        setSelectedDocumentNumber(number);
    };

    const handleGenerateReport = () => {
      if (selectedDocumentType && selectedDocumentNumber && selectedDocumentId) {
        downloadReport(selectedDocumentType, selectedDocumentId, selectedDocumentNumber);
      }
      else {
        alert('Выберите все поля');
      }
    };

    if (authed === null) {
      isAuthed().then(res => setAuthed(res));
        }
    
      if (authed !== null && authed === false) {
        return <Navigate to='/' replace/>
      }
  
      return (
        <div className='app-container'>
          <main className='app-main'>
          <div className='document-section'>
            <div>
              <label htmlFor='documentTypeSelect'>Тип документа</label>
              <select
                id="documentTypeSelect"
                value={selectedDocumentType}
                onChange={handleDocumentTypeChange}
              >
                <option value={null}>Выберите тип документ</option>
                {reportTypes?.map(type => (
                  <option value={type.key}>{type.value}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="documentNumberSelect">Закупка</label>
              <select id = 'documentNumberSelect'
                value={selectedDocumentId}
                onChange={handleDocumentNumberChange}
              >
                <option value={null}>Выберите закупку</option>
                {purchases?.map((purch) => (
                  <option value={purch.id}>
                    {purch.number}
                  </option>
                ))}
              </select>
            </div>
            <button className='generate-button' onClick={handleGenerateReport}>
              Сгенерировать отчет
            </button>
          </div>
        </main>
        </div>
      );
  }
  
  export default Doc;