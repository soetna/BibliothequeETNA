import React from 'react';
import '../style/SearchBar.css';
import etna from '../public/etna.svg';

const SearchBar = () => {
  return (
    <>
      <div className="search-container">
      <div className='img'>
      <img className="logotop" src={etna} alt="logo" />
      </div>
      <div className='content'>
        <p className="search-title">
          Bibliothéque de l'ETNA
        </p> 
        <p className="search-description">
        Rechercher dans les collections des bibliothèques
        </p>
        <input className="search-input" type="text" placeholder="livre, auteur, editeur, genre..."/>
      </div>
      </div>
    </>
  );
};

export default SearchBar;
