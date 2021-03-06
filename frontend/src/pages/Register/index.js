import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImage from '../../assets/logo.svg';

import './styles.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const res = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${res.data.id}`);

      history.push('/');
    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return(
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadstro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="text-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o login
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="Nome da ONG"
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
          />
          <input
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            type="text"
            placeholder="Whatsapp"
          />

          <div className="input-group">
            <input
              value={city}
              onChange={e => setCity(e.target.value)}
              type="text"
              placeholder="Cidade"
            />
            <input
              value={uf}
              onChange={e => setUf(e.target.value)}
              type="text"
              placeholder="UF"
              style={{ width: 80, }}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
