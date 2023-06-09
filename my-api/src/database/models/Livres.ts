import { DataTypes } from "sequelize";
import sequelize from "../instance";

const Livres = sequelize.define(
  "Livres",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Titre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Auteur: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    AnneePublication: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Genre: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    UrlImg: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "Livres",
  }
);

export default Livres;
