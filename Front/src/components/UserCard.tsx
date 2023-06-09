import React, { useState } from 'react';
import axios from 'axios';
import '../style/UserCard.css';

const baseURL = 'http://localhost:3036/Membre';

interface User {
  ID: number;
  Nom: string;
  Prenom: string;
  Telephone: string;
  Email: string;
  DateAdhesion: string;
  DateFinAdhesion: string;
  Password: string;
  Photo: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [showInformation, setShowInformation] = useState(true);
  const [showLivresEmpruntes, setShowLivresEmpruntes] = useState(false);
  const [showFormulaire, setShowFormulaire] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${baseURL}/${user.ID}`, updatedUser);
      console.log('User information updated:', response.data);
      setEditing(false);
      window.location.reload();
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };
  const handleCancel = () => {
    setEditing(false);
    setUpdatedUser(user);
  };

  const handleFormulaireClick = () => {
    setShowInformation(false);
    setShowLivresEmpruntes(false);
    setShowFormulaire(true);
  };

  const formatDateString = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <><div className="UserCard">
          <div className="UserCardInfo">
              {user.Photo && <img className="UserCard-photo" src={user.Photo} alt="Photo de profil" />}
              {showInformation && (
                  <>
                      <h3 className="">{user.Nom} {user.Prenom}</h3>
                      <h3 className="">Téléphone : {user.Telephone}</h3>
                      <h3 className="">Email : {user.Email}</h3>
                      <h3 className="">Date d'adhésion : {formatDateString(user.DateAdhesion)}</h3>
                      <h3 className="">Date de fin d'adhésion : {formatDateString(user.DateFinAdhesion)}</h3>

                  </>
              )}
              {showLivresEmpruntes && (
                  <>
                      <h3>Livres empruntés</h3>
                  </>
              )}
              {showFormulaire && (
                  <form className='Form' onSubmit={handleSubmit}>
                      <div></div>
                      <h3>Modifier les informations</h3>
                      <label htmlFor="telephone">Téléphone:</label>
                      <input type="text" id="telephone" name="Telephone" value={updatedUser.Telephone} onChange={handleInputChange} />

                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" name="Email" value={updatedUser.Email} onChange={handleInputChange} />

                      <label htmlFor="dateAdhesion">Date d'adhésion:</label>
                      <input
                          type="text"
                          id="dateAdhesion"
                          name="DateAdhesion"
                          value={formatDateString(updatedUser.DateAdhesion)}
                          onChange={handleInputChange}
                          disabled />

                      <label htmlFor="dateFinAdhesion">Date de fin d'adhésion:</label>
                      <input
                          type="text"
                          id="dateFinAdhesion"
                          name="DateFinAdhesion"
                          value={formatDateString(updatedUser.DateFinAdhesion)}
                          onChange={handleInputChange}
                          disabled />

                      <button type="submit">Enregistrer</button>
                      <button type="button" onClick={handleCancel}>Annuler</button>
                  </form>
              )}
          </div>
          <div className="UserCardButtons">
              {showInformation && (
                  <button className='edit' type="button" onClick={handleFormulaireClick}>Modifier les informations</button>
              )}
          </div>
      </div>
      </>
  );
};

export default UserCard;
