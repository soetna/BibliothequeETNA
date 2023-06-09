import { DataTypes } from "sequelize";
import sequelize from "../instance";
import Livres from "./Livres";
import Membres from "./Membres";

const PretsLivres = sequelize.define(
  "PretsLivres",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    IDLivre: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    IDMembre: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    DateEmprunt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DateRetourPrevu: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DateRetourEffectif: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Etat: {
      type: DataTypes.ENUM("en cours", "retourné"),
      allowNull: false,
      defaultValue: "en cours",
    },
  },
  {
    tableName: "PretsLivres",
  }
);

PretsLivres.belongsTo(Livres, { foreignKey: "IDLivre" });
PretsLivres.belongsTo(Membres, { foreignKey: "IDMembre" });

export default PretsLivres;
