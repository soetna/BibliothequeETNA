import { Request, Response } from 'express';
import routeremployes from './routes/EmployesBibliotheque.route';
import routerlivres from './routes/Livres.route';
import routerlivresempruntes from './routes/LivresEmpruntes.route';
import routersmembres from './routes/Membres.route';
import routerspretslivres from './routes/PretsLivres.route';
const express = require('express');
const cors = require('cors');
const app = express();

const port = 3036;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my website');
});

app.post('/', (req: Request, res: Response) => {
  res.send('Je suis une requête POST');
});

app.use('/employe', routeremployes);
app.use('/livre', routerlivres);
app.use('/livreemprunte', routerlivresempruntes);
app.use('/livreenpret', routerspretslivres);
app.use('/membre', routersmembres);

app.listen(port, () => {
  console.log('Dispo sur http://localhost:3036');
});
