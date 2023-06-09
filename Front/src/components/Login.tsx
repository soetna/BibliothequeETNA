import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/Login.css';
import Loginimg from '../public/27wv8uagx5uo86uw1t23je20k.svg';


interface LoginProps {
    onLogin: (id: string) => void;
  }
  

const Login = ({ onLogin }: LoginProps) => {
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
      const response = await axios.get('http://localhost:3036/Membre', {
        params: {
          Email: email,
          Password: password,
        },
      });

      const users = response.data;

      const user = users.find((u: any) => u.Email === email && u.Password === password);

      if (user) {
        onLogin(user.ID.toString());
        localStorage.setItem('userId', user.ID.toString());
      }
      
      else {
        setError('Mot de passe ou Email incorrect');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      onLogin(userId.toString());
    }
  }, []);
  

  return (
    <><div className='login-container'>
      <img className='imglogin' src={Loginimg} alt="" />
      <h2 className='Titlelogin'>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <h3 className='idmdp'>Email:</h3>
        <input className='inputlogin'
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange} />
        <h3 className='idmdp'>Mot de passe:</h3>
        <input className='inputlogin'
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={handlePasswordChange} />
        {error && <p className='error'>{error}</p>}
        <button className='submit' type="submit">Envoyer</button>
      </form>
    </div></>
  );
};

export default Login;
