import React from 'react';
import styles from '../styles/ProductGrid.module.css'; // Подключаем стили

const products = [
  { id: 1, name: 'Медицинские изделия', icon: '/med.png' },
  { id: 2, name: 'Продукты питания', icon: '/foodicon.png' },
  { id: 3, name: 'Бумага и канцелярия', icon: '/penicon.png' },
  { id: 4, name: 'Бытовая химия', icon: '/himicon.png' },
  { id: 5, name: 'Одежда и обувь', icon: '/clothesicon.png' },
  { id: 6, name: 'Посуда', icon: '/kitchenicon.png' },
  { id: 7, name: 'Транспорт', icon: '/caricon.png' },
  { id: 8, name: 'Техника', icon: '/techicon.png' },
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