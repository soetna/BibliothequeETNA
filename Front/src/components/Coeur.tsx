import React, { useEffect, useState } from 'react';
import '../style/Coeur.css';
import LivreCard from './Livre';
import axios from "axios";

const baseURL = "http://localhost:3036/livre";

interface LivreResponse {
  livre: Livre;
}

interface Livre {
  ID: number;
  Titre: string;
  Auteur: string;
  UrlImg: string;
}

const CoupDeCoeur = () => {
  const [livres, setLivres] = useState<Livre[]>([]);

  useEffect(() => {
    const fetchLivres = async () => {
      const response1 = await axios.get<LivreResponse>(`${baseURL}/1`);
      const response16 = await axios.get<LivreResponse>(`${baseURL}/16`);
      const response23 = await axios.get<LivreResponse>(`${baseURL}/23`);
      const response100 = await axios.get<LivreResponse>(`${baseURL}/100`);

      setLivres([
        response1.data.livre,
        response16.data.livre,
        response23.data.livre,
        response100.data.livre
      ]);
    };

    fetchLivres();
  }, []);

  return (
    <div className="CoupDeCoeurContainer">
      <div className="CoupDeCoeurRectangle">
        {livres.map((livre) => (
          <LivreCard
            key={livre.ID}
            title={livre.Titre}
            author={livre.Auteur}
            coverImage={livre.UrlImg} selected={false} onToggleSelection={function (): void {
              throw new Error('Function not implemented.');
            } }          />
        ))}
      </div>
    </div>
  );
};

export default CoupDeCoeur;
