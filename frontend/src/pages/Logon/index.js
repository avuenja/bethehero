import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

import './styles.css';

function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogon(e) {
    e.preventDefault();

    try {
      const res = await api.post('auth', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', res.data.name);

      history.push('/profile');
    } catch (error) {
      alert('Falha no logon, tente novamente.');
    }
  }

  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="Be The Hero"/>

        <form onSubmit={handleLogon}>
          <h1>Faça seu logon</h1>

          <input
            value={id}
            onChange={e => setId(e.target.value)}
            type="text"
            placeholder="Sua ID"
          />

          <button className="button" type="submit">Entrar</button>

          <Link className="text-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImage} alt="Heroes"/>
    </div>
  );
}

export default Logon;
