import { Request, Response } from "express";
import PretsLivres from "../database/models/PretsLivres";
import Livres from "../database/models/Livres";
import Membres from "../database/models/Membres";

async function getAll(req: Request, res: Response) {
  const pretsLivres = await PretsLivres.findAll();
  res.send(JSON.stringify(pretsLivres));
}

async function getById(req: Request, res: Response) {
  const pretLivre = await PretsLivres.findByPk(req.params.id, {
    include: [Livres, Membres],
  });
  if (pretLivre) {
    res.send({ pretLivre });
  } else {
    res.status(404).send({ error: "NOT_FOUND" });
  }
}

async function create(req: Request, res: Response) {
  const pretLivre = await PretsLivres.create(req.body);
  res.send({ pretLivre });
}

async function update(req: Request, res: Response) {
  const pretLivre = await PretsLivres.update(req.body, {
    where: {
      ID: req.params.id,
    },
  });
  if (pretLivre[0] === 1) {
    res.send({ pretLivre });
  } else {
    res.status(404).send({ error: "NOT_FOUND" });
  }
}

async function remove(req: Request, res: Response) {
  const pretLivre = await PretsLivres.destroy({
    where: { ID: req.params.id },
  });
  if (pretLivre === 1) {
    res.send({ pretLivre });
  } else {
    res.status(404).send({ error: "NOT_FOUND" });
  }
}

export { getAll, getById, create, update, remove };
