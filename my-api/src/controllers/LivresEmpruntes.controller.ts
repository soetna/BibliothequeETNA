import { Request, Response } from "express";
import LivresEmpruntes from "../database/models/LivresEmpruntes";

async function getAll(req: Request, res: Response) {
  const livresEmpruntes = await LivresEmpruntes.findAll();
  res.send(JSON.stringify(livresEmpruntes));
}

async function getById(req: Request, res: Response) {
  const livreEmprunte = await LivresEmpruntes.findByPk(req.params.id);
  if (livreEmprunte) {
    res.send({ livreEmprunte });
  } else {
    res.status(404).send({ error: "NOT_FOUND" });
  }
}

async function create(req: Request, res: Response) {
  const livreEmprunte = await LivresEmpruntes.create(req.body);
  res.send({ livreEmprunte });
}

async function update(req: Request, res: Response) {
  const livreEmprunte = await LivresEmpruntes.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  if (livreEmprunte) {
    res.send({ livreEmprunte });
  } else {
    res.status(404).send({ error: "NOT_FOUND" });
  }
}

async function remove(req: Request, res: Response) {
  const livreEmprunte = await LivresEmpruntes.destroy({
    where: { id: req.params.id },
  });
  if (livreEmprunte) {
    res.send({ livreEmprunte });
  } else {
    res.status(404).send({ error: "NOT_FOUND" });
  }
}

export { getAll, getById, create, update, remove };
