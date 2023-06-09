import { DataTypes } from "sequelize";
import sequelize from "../instance";

const EmployesBibliotheque = sequelize.define(
  "EmployesBibliotheque",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Prenom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Adresse: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Telephone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    DateEmbauche: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Poste: {
      type: DataTypes.ENUM("bibliothecaire", "gestionnaire"),
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "EmployesBibliotheque",
  }
);

export default EmployesBibliotheque;
