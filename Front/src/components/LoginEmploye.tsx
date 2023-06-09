import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/Login.css';
import Loginimg from '../public/27wv8uagx5uo86uw1t23je20k.svg';

interface LoginProps {
  onLogin: (id: string) => void;
}

const LoginEmploye = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:3036/employe', {
        params: {
          Email: email,
          Password: password,
        },
      });

      const employees = response.data;

      const employee = employees.find(
        (emp: any) => emp.Email === email && emp.Password === password
      );

      if (employee) {
        onLogin(employee.ID.toString());
        localStorage.setItem('IDemploye', employee.ID.toString());
      } else {
        setError('Mot de passe ou email incorrect');
      }
    } catch (error) {
      setError('Une erreur est survenue');
    }
  };

  useEffect(() => {
    const employeeId = localStorage.getItem('IDemploye');
    if (employeeId) {
      onLogin(employeeId.toString());
    }
  }, []);

  return (
    <>
      <div className="login-container">
        <img className="imglogin" src={Loginimg} alt="" />
        <h2 className="Titlelogin">Connectez-vous</h2>
        <form onSubmit={handleSubmit}>
          <h3 className="idmdp">Email:</h3>
          <input
            className="inputlogin"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <h3 className="idmdp">Mot de passe:</h3>
          <input
            className="inputlogin"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
          />
          {error && <p className="error">{error}</p>}
          <button className="submit" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginEmploye;
