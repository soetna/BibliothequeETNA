import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Alluser.css';
import '../style/UserForm.css';
import SearchBar from '../components/SearchBar';
import biblio from '../public/biblio.jpg';
import Box from '../components/Box';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EmployeeCard from '../components/EmployeCard';
import LoginEmploye from '../components/LoginEmploye';
import Alluser from '../components/Alluser';
import UserForm from '../components/UserForm';
import Allbook2 from './Allbookforemploye';
import NewLivreForm from '../components/AjoutLivre';
import { Link } from 'react-router-dom';


const baseURL = 'http://localhost:3036/employe';

interface Employee {
  ID: number;
  Nom: string;
  Prenom: string;
  Adresse: string | null;
  Telephone: string | null;
  Email: string;
  DateEmbauche: string;
  Poste: 'bibliothecaire' | 'gestionnaire';
  Password: string;
}

interface EmployeeProps {
  employeeId: number;
}

const EmployeePage = ({ employeeId }: EmployeeProps) => {
  const [employeeData, setEmployeeData] = useState<Employee[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get<Employee[]>(baseURL);
        setEmployeeData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations des employés:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    setUserData(undefined);
    localStorage.removeItem('EmployeeId');
  };

  if (!isLoggedIn) {
    return <LoginEmploye onLogin={handleLogin} />;
  }

  return (
    <>
      <Navbar />
      <div className="Top">
        <div className="SearchBar-container">
          <SearchBar />
        </div>
        <img className="Top-img" src={biblio} alt="logo_etna_white" />
      </div>
      <div className="App">
        <div className="Box">
          <Box />
        </div>
        <div className="Coup-de-coeur">
          <div className="VerticalBar">|</div>
          <div className="Coup-de-coeur-container">
            <div className="Coup-de-coeur-text">
              <h2 className="Coup-de-coeur-desc">Votre compte</h2>
              <h1 className="Coup-de-coeur-title">Employé</h1>
            </div>
          </div>
        </div>
        <div className='separator'></div>
      </div>
      {employeeData.map((employee) => (
        <EmployeeCard key={employee.ID} employee={employee} />
      ))}
      <div className="Coup-de-coeur">
        <div className="VerticalBar">|</div>
        <div className="Coup-de-coeur-container">
          <div className="Coup-de-coeur-text">
            <h2 className="Coup-de-coeur-desc">Tous les</h2>
            <h1 className="Coup-de-coeur-title">Utilisateurs</h1>
          </div>
        </div>
      </div>
      <div className='separator'></div>
      <div className='AlluserContainer'>
        <Alluser />
      </div>
      <div className="Coup-de-coeur">
        <div className="VerticalBar">|</div>
        <div className="Coup-de-coeur-container">
          <div className="Coup-de-coeur-text">
            <h2 className="Coup-de-coeur-desc">Ajouter un</h2>
            <h1 className="Coup-de-coeur-title">Utilisateur</h1>
          </div>
        </div>
      </div>
      <UserForm />
      <div className="Coup-de-coeur">
        <div className="VerticalBar">|</div>
        <div className="Coup-de-coeur-container">
          <div className="Coup-de-coeur-text">
            <h2 className="Coup-de-coeur-desc">Supprimer et modifier</h2>
            <h1 className="Coup-de-coeur-title">Les livres</h1>
          </div>
        </div>
      </div>
      <Allbook2 />
      <NewLivreForm />
        
      <div className='buttondecocontainer'>
        <button className='buttondeco' onClick={handleLogout}>Déconnexion</button>
      </div>
      <Footer />
    </>
  );
};



export default EmployeePage;
function setUserId(arg0: null) {
  throw new Error('Function not implemented.');
}

function setUserData(undefined: undefined) {
  throw new Error('Function not implemented.');
}

