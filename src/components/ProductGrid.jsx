import React, { useEffect, useReducer, useState } from 'react';
import styles from '../styles/ProductGrid.module.css'; // Подключаем стили
import { subTelegram } from '../utils/api';

const productsList = [
  { id: 1, is_subscribed: false, name: 'Медицинские изделия', icon: '/med.png' },
  { id: 2, is_subscribed: false, name: 'Продукты питания', icon: '/foodicon.png' },
  { id: 3, is_subscribed: false, name: 'Бумага и канцелярия', icon: '/penicon.png' },
  { id: 4, is_subscribed: false, name: 'Бытовая химия', icon: '/himicon.png' },
  { id: 5, is_subscribed: false, name: 'Одежда и обувь', icon: '/clothesicon.png' },
  { id: 6, is_subscribed: false, name: 'Посуда', icon: '/kitchenicon.png' },
  { id: 7, is_subscribed: false, name: 'Транспорт', icon: '/caricon.png' },
  { id: 8, is_subscribed: false, name: 'Техника', icon: '/techicon.png' },
];

export function ProductGrid() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [products, setProducts] = useState(productsList);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        updateSubs(user.subscriptions);
        forceUpdate();
    }, [])

    const updateSubs = (activeSubs) => {
        products.forEach(product => {
            const res = activeSubs.find(cat => cat.id == product.id);
            product.is_subscribed = (res !== undefined);
        });
    }

    const handleSubscription = (product) => {
        subTelegram(user.id, product.id, product.is_subscribed)
            .then((data) => {
                updateSubs(data.subscriptions);
                forceUpdate();
            }).catch(e => console.log(e));
    };

  return (
    <div className={styles.gridContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img src={product.icon} alt={product.name} className={styles.icon} />
          <h3 className={styles.name}>{product.name}</h3>
          <a className={styles.button} onClick={() => handleSubscription(product)}>
            {product.is_subscribed ? "Отписаться" : "Подписаться"}
          </a>
        </div>
      ))}
    </div>
  );
}