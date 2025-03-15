import styles from '../styles/DocPages.css'
import React from 'react';

const data = [
  { date: '2025-02-05', image: '/pdf.png', name: 'Федеральный закон от 19.05.1995 N 82-ФЗ (ред. от 08.08.2024) Об общественных объединениях (с изм. и доп., вступ. в силу с 05.02.2025)' },
  { date: '2025-02-05', image: '/pdf.png', name: 'Федеральный закон от 12.01.1996 N 7-ФЗ (ред. от 30.09.2024) О некоммерческих организациях (с изм. и доп., вступ. в силу с 05.02.2025)' },
  { date: '2025-01-16', image: '/pdf.png', name: 'Федеральный закон от 30.11.2024 N 432-ФЗ О внесении изменений в статью 112 Федерального закона N 44-ФЗ' },
  { date: '2025-01-16', image: '/pdf.png', name: 'Федеральный закон от 23.11.2024 N 415-ФЗ О внесении изменения в статью 31 Федерального закона N 519-ФЗ' },
];

const Table = () => {
  return (
    <div clsddName="pageDoc">
    <h1>Законодательство в сфере закупок</h1>
    <div className="search-bar">
      <input type="text" placeholder="Поиск по наименованию или содержанию документа" className="search-input" />
      <img src="/searchicon.svg" alt="Лупа" className="search-icon" />
   </div>
   <h2>Законодательство в сфере закупок</h2>
    <div className="tablePDF">
      {data.map((item, index) => (
        <div className="row" key={index}>
          <div className="cell datePDF">{item.date}</div>
          <div className="cell namePDF">
            <img src="/pdf.png" alt="папка" className="icon" />
            {item.name}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};


export default Table;

