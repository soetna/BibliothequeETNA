import { Router } from 'express';
import {
  create, getAll, getById, remove, update,
} from '../controllers/Membres.controller';

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.delete('/:id', remove);
router.put('/:id', update);

export default router;
