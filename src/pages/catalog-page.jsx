import React, { useState } from 'react';
import styles from '../styles/SearchBlock.module.css'

const categories = [
  { name: "Медицинские изделия", icon: "/med.svg" },
  { name: "Продукты питания", icon: "../assets/icons/med.svg" },
  { name: "Бумага и канцелярские товары", icon: "../assets/icons/med.svg" },
  { name: "Бытовая химия", icon: "../assets/icons/med.svg" },
  { name: "Одежда и обувь", icon: "../assets/icons/med.svg" },
  { name: "Посуда и столовые приборы", icon: "../assets/icons/med.svg" },
  { name: "Транспорт", icon: "../assets/icons/med.svg" },
  { name: "Техника и компьютеры", icon: "../assets/icons/med.svg" },
];

export default function CatalogPage() {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.SearchBlock}>
      <p>Каталог товаров, работ, услуг для обеспечения государственных и муниципальных нужд</p>
      <div className={styles.SearchArea}>
        <input  type="text" placeholder="Введите полностью или часть кода или наименование позиции КТРУ" />
        <a href='#'><img src='/searchicon.svg' alt='Поиск'></img></a>
      </div>
    </div>
  );
}