import React, { useState } from 'react';
import axios from 'axios';
import '../style/NewLivreForm.css';

const NewLivreForm = () => {
  const [Titre, setTitre] = useState('');
  const [Auteur, setAuteur] = useState('');
  const [UrlImg, setUrlImg] = useState('');

  const handleTitreChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTitre(event.target.value);
  };

  const handleAuteurChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setAuteur(event.target.value);
  };

  const handleUrlImgChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setUrlImg(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const newLivre = {
      Titre: Titre,
      Auteur: Auteur,
      UrlImg: UrlImg,
    };

    try {
      await axios.post('http://localhost:3036/livre', newLivre);

      console.log('Livre créé avec succès');
    } catch (error) {

      console.error('Erreur lors de la création du livre:', error);
    }

    setTitre('');
    setAuteur('');
    setUrlImg('');
  };

  return (
    <form className='Form' onSubmit={handleSubmit}>
      <h2>Ajouter un nouveau livre</h2>
      <div>
        <label htmlFor="Titre">Titre :</label>
        <input type="text" id="Titre" value={Titre} onChange={handleTitreChange} />
      </div>
      <div>
        <label htmlFor="Auteur">Auteur :</label>
        <input type="text" id="Auteur" value={Auteur} onChange={handleAuteurChange} />
      </div>
      <div>
        <label htmlFor="UrlImg">URL de l'image :</label>
        <input type="text" id="UrlImg" value={UrlImg} onChange={handleUrlImgChange} />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default NewLivreForm;
