import { Request, Response } from "express";
import EmployesBibliotheque from "../database/models/EmployesBibliotheque";

async function getAll(req: Request, res: Response) {
  const employes = await EmployesBibliotheque.findAll();
  res.send(JSON.stringify(employes));
}

async function getById(req: Request, res: Response) {
  const employe = await EmployesBibliotheque.findByPk(req.params.id);
  if (employe) {
    res.send({ employe });
  } else {
    res.status(404).send({ error: "NOT_FOUND" });
  }
}

async function create(req: Request, res: Response) {
  const employe = await EmployesBibliotheque.create(req.body);
  res.send({ employe });
}

async function update(req: Request, res: Response) {
  const employe = await EmployesBibliotheque.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  if (employe) {
    res.send({ employe });
  } else {
    res.status(404).send({ error: "NOT_FOUND" });
  }
}

async function remove(req: Request, res: Response) {
  const employe = await EmployesBibliotheque.destroy({
    where: { id: req.params.id },
  });
  if (employe) {
    res.send({ employe });
  } else {
    res.status(404).send({ error: "NOT_FOUND" });
  }
}

export { getAll, getById, create, update, remove };
