  import { Request, Response } from "express";
import Livres from "../database/models/Livres";

async function getAll(req: Request, res: Response) {
  const livres = await Livres.findAll();
  res.send(JSON.stringify(livres));
}

async function getById(req: Request, res: Response) {
  const livre = await Livres.findByPk(req.params.id);
  if (livre) {
    res.send({ livre });
  } else {
    res.status(404).send({ error: "NOT_FOUND" });
  }
}

async function create(req: Request, res: Response) {
  const livre = await Livres.create(req.body);
  res.send({ livre });  
}

async function update(req: Request, res: Response) {
  const livre = await Livres.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  if (livre) {
    res.send({ livre });
  } else {
    res.status(404).send({ error: "NOT_FOUND" });
  }
}

async function remove(req: Request, res: Response) {
  const livre = await Livres.destroy({ where: { id: req.params.id } });
  if (livre) {
    res.send({ livre });
  } else {
    res.status(404).send({ error: "NOT_FOUND" });
  }
}

export { getAll, getById, create, update, remove };
