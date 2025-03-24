import styles from '../styles/DocPages.css'
import React from 'react';

const data = [
  { date: '2016-02-02', image: '/pack.png', name: 'Федеральные законы' },
  { date: '2016-02-02', image: '/pack.png', name: 'Постановление Правительства РФ' },
  { date: '2016-02-02', image: '/pack.png', name: 'Распоряжение Правительства РФ' },
  { date: '2016-02-02', image: '/pack.png', name: 'Приказы ФОИВ' },
  { date: '2016-02-02', image: '/pack.png', name: 'Кодексы РФ' },
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
    <div className="table">
      {data.map((item, index) => (
        <div className="row" key={index}>
          <div className="cell date">{item.date}</div>
          <div className="cell name">
          <a href='./docpagesfile'>
            <img src="/pack.png" alt="папка" className="icon" />
          </a>
            {item.name}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};


export default Table;

