import React, { useEffect, useState } from 'react';
import '../css/RegForm.css'
import client from '../utils/client';
import { Navigate } from 'react-router-dom';
import { getOrganizations, getPositions } from '../utils/api';

function RegForm() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [isLegalEntity, setIsLegalEntity] = useState(false);
    const [organization, setOrganization] = useState('');
    const [position, setPosition] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const [orgs, setOrgs] = useState(null);
    const [positions, setPositions] = useState(null);
    if (orgs === null) {
        console.log('Sent')
        getOrganizations().then(data => {
            console.log(data);
            setOrgs(data);
            console.log(orgs);
        }).catch(e => console.log(e));
    }
    if (positions === null) {
        getPositions().then(data => setPositions(data)).catch(e => console.log(e));
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      client.post('user/sign/up',
        {
          surname: lastName, 
          name: firstName, 
          patronymic: middleName,
          number: phone, 
          email: email,
          password: password, 
          role: role, 
          isLegalEntity: isLegalEntity,
          organization_id: organization, 
          position_id: position
        }
      ).then(res => {
        if (res.status == 200) {
            setIsRegistered(true);
        }
      }).catch(e => console.log(e));
    };
    if (isRegistered) {
        return <Navigate to='/' replace/>
    }
    return (
      <div className="container">
        <h1 className="header">ГосЗакупки РФ</h1>
        <div className="registration-form">
        <h2 class="auth">РЕГИСТРАЦИЯ</h2>
            <form onSubmit={handleSubmit}>
          <div className="form-column">
            <div className="input-group">
              <label htmlFor="lastName">Фамилия:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
            <label htmlFor="firstName">Имя:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
              <label htmlFor="middleName">Отчество:</label>
              <input type="text" id="middleName" value={middleName} onChange={(e) => setMiddleName(e.target.value)}/>
          </div>
            <div className="input-group">
              <label htmlFor="phone">Телефон:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className="input-group">
              <label htmlFor="role">Роль в системе:</label>
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="">Выберите роль</option>
                <option value="USER">Поставщик</option>
                <option value="ADMIN">Заказчик</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="organization">Организация:</label>
              <select id="org" value={organization} onChange={(e) => setOrganization(e.target.value)} required>
                <option value="">Выберите организацию</option>
                {orgs?.map(org => <option value={org.id}>{org.title}</option>)}
              </select>
            </div>
            <div className="input-group">
                <label htmlFor="position">Должность:</label>
                <select id="position" value={position} onChange={(e) => setPosition(e.target.value)} required>
                    <option value="">Выберите должность</option>
                    {positions?.map(pos => <option value={pos.id}>{pos.title}</option>)}
                </select>
            </div>
          </div>
          <div className="form-column">
          <div className="input-group">
            <label>Юр.лицо:</label>
            <input
              type="checkbox"
              id="isLegalEntity"
              checked={isLegalEntity}
              onChange={(e) => setIsLegalEntity(e.target.checked)}
            />
            <label htmlFor="isLegalEntity">Да</label>
          </div>
          <div className="input-group">
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="button-30">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
}

export default RegForm;
