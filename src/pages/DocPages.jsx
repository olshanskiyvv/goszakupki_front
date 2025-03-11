import styles from '../styles/DocPages.css'
import React from 'react';
import { HeaderMaket } from '../components/HeaderMaket';

const data = [
  { date: '2019-01-02', name: 'Нормативные правовые акты 44-ФЗ' },
  { date: '2019-01-02', name: 'Нормативные правовые акты 223-ФЗ' },
  { date: '2019-01-02', name: 'Национальный режим' },
  { date: '2019-01-02', name: 'Разъяснения законодательства' },
];

const Table = () => {
  return (
    <div clsddName="pageDoc">
    <h1>Законодательство в сфере закупок</h1>
    <div className='bar'>
    <div className="search-bar">
      <input type="text" placeholder="Поиск по наименованию или содержанию документа" className="search-input" />
      <img src="/searchicon.svg" alt="Лупа" className="search-icon" />
   </div>
   </div>
   <h2>Законодательство в сфере закупок</h2>
    <div className="table">
      {data.map((item, index) => (
        <div className="row" key={index}>
          <div className="cell date">{item.date}</div>
          <div className="cell name">
            <img src="/pack.png" alt="папка" className="icon" />
            {item.name}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};


export default Table;

