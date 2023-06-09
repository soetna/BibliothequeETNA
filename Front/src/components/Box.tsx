import React from 'react';
import '../style/Box.css';
import Pret from '../public/Pret.png';
import Livre from '../public/AllLivre.png';
import Compte from '../public/Compte.png';



function ContentBox() {
  return (
    <div className="ContentBox">
      <div className="ClickableItem">
        <img src={Livre} alt="Books" className="ItemImage" />
        <p className="ItemTitle">Tous les livres</p>
      </div>
      <div className="ClickableItem">
        <img src={Pret} alt="Loan" className="ItemImage" />
        <p className="ItemTitle">Gérer mes prêts</p>
      </div>
      <div className="ClickableItem">
        <img src={Compte} alt="Account" className="ItemImage" />
        <p className="ItemTitle">Mon compte</p>
      </div>
      <div className="ClickableItem">
        <img src={Compte} alt="Signup" className="ItemImage" />
        <p className="ItemTitle">Compte Employée</p>
      </div>
    </div>
  );
}

export default ContentBox;
