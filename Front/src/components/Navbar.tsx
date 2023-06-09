import React from 'react';
import '../style/Navbar.css';
import etna from '../public/etna.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar'>
      <header className='Navbar-header'>
        <h1>Bibliothéque de l'Etna</h1>
        <img className='Navbar-logo' src={etna} alt='logo_etna_white' />
      </header>
      <nav className='Navbar-nav'>
        <ul>
            <li><Link to="/">Acceuil</Link></li>
            <li><Link to="/Allbook">Livre</Link></li>
            <li><Link to="/User">Mon compte</Link></li>
            <li><Link to="/Employee">Accès Employé</Link></li>
        </ul>
        </nav>
    </div>
  );
}

export default Navbar;