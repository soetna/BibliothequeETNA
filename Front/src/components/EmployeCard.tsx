import React, { useState } from 'react';
import axios from 'axios';
import '../style/EmployeeCard.css';

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

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const [editing, setEditing] = useState(false);
  const [updatedEmployee, setUpdatedEmployee] = useState(employee);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUpdatedEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${baseURL}/${employee.ID}`, updatedEmployee);
      console.log('Employee information updated:', response.data);
      setEditing(false);
      window.location.reload();
    } catch (error) {
      console.error('Error updating employee information:', error);
    }
  };

  const handleCancel = () => {
    setEditing(false);
    setUpdatedEmployee(employee);
  };

  const formatDateString = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="EmployeeCard">
      <div className="EmployeeCardInfo">
        <h3 className="EmployeeCard-name">{employee.Nom} {employee.Prenom}</h3>
        <h3 className="EmployeeCard-info">Adresse : {employee.Adresse}</h3>
        <h3 className="EmployeeCard-info">Téléphone : {employee.Telephone}</h3>
        <h3 className="EmployeeCard-info">Email : {employee.Email}</h3>
        <h3 className="EmployeeCard-info">Date d'embauche : {formatDateString(employee.DateEmbauche)}</h3>
        <h3 className="EmployeeCard-info">Poste : {employee.Poste}</h3>
      </div>
    </div>
  );
};

export default EmployeeCard;
