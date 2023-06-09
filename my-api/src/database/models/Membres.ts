import { DataTypes } from "sequelize";
import sequelize from "../instance";

const Membres = sequelize.define(
  "Membres",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      autoIncrementIdentity: 1,
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
    DateAdhesion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    DateFinAdhesion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Photo: {
        type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "Membres",
  }
);

export default Membres;
