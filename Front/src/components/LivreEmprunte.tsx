import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LivreCard from './Livre';
import '../style/Livreempr.css';

const baseURL = 'http://localhost:3036/';

interface Livre {
  livre: any;
  ID: number;
  Titre: string;
  Auteur: string;
  UrlImg: string;
}

interface PretLivre {
  IDPretLivre: number;
  IDLivre: number;
  IDMembre: number;
  DateEmprunt: string;
  DateRetourPrevu: string;
  DateRetourEffectif: string | null;
  Etat: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  userId: number | null;
}

const LivreEmprunte = ({ userId }: Props) => {
  const [livresEmpruntes, setLivresEmpruntes] = useState<Livre[]>([]);
  const [livresSelectionnes, setLivresSelectionnes] = useState<number[]>([]);
  
  useEffect(() => {
    const fetchLivresEmpruntes = async () => {
      try {
        if (userId) {
          const emprunteResponse = await axios.get<PretLivre[]>(`${baseURL}livreenpret`);
          const livresEmpruntesIDs = emprunteResponse.data
            .filter((livre) => livre.IDMembre === userId)
            .map((livre) => livre.IDLivre);
  
          const livresResponse = await Promise.all(
            livresEmpruntesIDs.map((livreID) => axios.get<Livre>(`${baseURL}livre/${livreID}`))
          );
  
          const livresEmpruntes = livresResponse.map((livreResponse) => livreResponse.data.livre);
  
          setLivresEmpruntes(livresEmpruntes);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des livres empruntés:', error);
      }
    };

    fetchLivresEmpruntes();
  }, [userId]);

  const handleToggleSelection = (livreID: number) => {
    setLivresSelectionnes((prevLivresSelectionnes) => {
      if (prevLivresSelectionnes.includes(livreID)) {
        return prevLivresSelectionnes.filter((id) => id !== livreID);
      } else {
        return [...prevLivresSelectionnes, livreID];
      }
    });
  };

  const handleReservation = async () => {
    try {
      await axios.post(`${baseURL}reserver`, {
        userID: userId,
        livres: livresSelectionnes,
      });

      setLivresSelectionnes([]);
    } catch (error) {
      console.error('Erreur lors de la réservation des livres:', error);
    }
  };

  return (
    <div className="LivreemprContainer">
      <div className="LivreemprRectangle">
        {livresEmpruntes.map((livre) => (
          <div key={livre.ID} className="LivreCardContainer">
            <LivreCard
              title={livre.Titre}
              author={livre.Auteur}
              coverImage={livre.UrlImg}
              selected={livresSelectionnes.includes(livre.ID)}
              onToggleSelection={() => handleToggleSelection(livre.ID)}
            />
            <select
              value={livresSelectionnes.includes(livre.ID) ? 'selected' : ''}
              onChange={() => handleToggleSelection(livre.ID)}
            >
              <option value="">Sélectionner</option>
              <option value="selected">Sélectionné</option>
            </select>
          </div>
        ))}
      </div>
      <button onClick={handleReservation}>Réserver</button>
    </div>
  );
};

export default LivreEmprunte;
