import { Request, Response } from "express";
import Membres from "../database/models/Membres";

async function getAll(req: Request, res: Response) {
  const membres = await Membres.findAll();
  res.send(JSON.stringify(membres));
}

async function getById(req: Request, res: Response) {
  const membre = await Membres.findByPk(req.params.id);
  if (membre) {
    res.send({ membre });
  } else {
    res.status(404).send({ error: "NOT_FOUND" });
  }
}

async function create(req: Request, res: Response) {
  const membre = await Membres.create(req.body);
  res.send({ membre });
}

async function update(req: Request, res: Response) {
  const membre = await Membres.update(req.body, {
    where: {
      ID: req.params.id,
    },
  });
  if (membre[0] === 1) {
    res.send({ membre });
  } else {
    res.status(404).send({ error: "NOT_FOUND" });
  }
}

async function remove(req: Request, res: Response) {
  const membre = await Membres.destroy({
    where: { ID: req.params.id },
  });
  if (membre === 1) {
    res.send({ membre });
  } else {
    res.status(404).send({ error: "NOT_FOUND" });
  }
}

export { getAll, getById, create, update, remove };
