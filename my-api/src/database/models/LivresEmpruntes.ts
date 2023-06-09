import { DataTypes } from "sequelize";
import sequelize from "../instance";
import Membres from "./Membres";
import PretsLivres from "./PretsLivres";

const LivresEmpruntes = sequelize.define(
  "LivresEmpruntes",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    IDMembre: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    IDPretLivre: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "LivresEmpruntes",
  }
);

LivresEmpruntes.belongsTo(Membres, { foreignKey: "IDMembre" });
LivresEmpruntes.belongsTo(PretsLivres, { foreignKey: "IDPretLivre" });

export default LivresEmpruntes;
