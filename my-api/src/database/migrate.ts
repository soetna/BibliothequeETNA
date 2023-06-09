import EmployesBibliotheque from "./models/EmployesBibliotheque";
import Livres from "./models/Livres";
import LivresEmpruntes from "./models/LivresEmpruntes";
import Membres from "./models/Membres";
import PretsLivres from "./models/PretsLivres";

async function migrate() {
  await EmployesBibliotheque.sync();
  await Livres.sync();
  await Membres.sync();
  await PretsLivres.sync();
  await LivresEmpruntes.sync();
}

migrate();
