import React from 'react';
import styles from '../styles/ProductGrid.module.css'; // Подключаем стили

const products = [
  { id: 1, name: 'Медицинские изделия', icon: '/medicon.svg' },
  { id: 2, name: 'Продукты питания', icon: '/foodicon.svg' },
  { id: 3, name: 'Бумага и канцелярия', icon: '/penicon.svg' },
  { id: 4, name: 'Бытовая химия', icon: '/himicon.svg' },
  { id: 5, name: 'Одежда и обувь', icon: '/clothesicon.svg' },
  { id: 6, name: 'Посуда', icon: '/kitchenicon.svg' },
  { id: 7, name: 'Транспорт', icon: '/caricon.svg' },
  { id: 8, name: 'Техника', icon: '/techicon.svg' },
];

export function ProductGrid() {
  return (
    <div className={styles.gridContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img src={product.icon} alt={product.name} className={styles.icon} />
          <h3 className={styles.name}>{product.name}</h3>
          <a href="#" className={styles.button}>
            Подписаться
          </a>
        </div>
      ))}
    </div>
  );
}