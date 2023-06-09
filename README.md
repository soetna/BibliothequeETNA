# Bibliothèque API

Cette API est destinée à gérer une bibliothèque virtuelle. Elle permet de gérer les employés, les livres, les livres empruntés, les livres en prêt et les membres.

## Installation

1. Cloner le dépôt du projet :

   ```bash
   git clone https://github.com/soetna/BibliothequeETNA.git
   ```

2. Accéder au répertoire du projet :

   ```bash
   cd /my-api
   ```

3. Installer les dépendances :

   - Express : un framework web minimaliste pour Node.js
     ```bash
     npm install express
     ```

   - Dotenv : un module pour charger les variables d'environnement à partir d'un fichier `.env`
     ```bash
     npm install dotenv
     ```

   - Sequelize : un ORM (Object-Relational Mapping) pour la gestion des bases de données relationnelles
     ```bash
     npm install sequelize
     ```

4. Renommer le fichier `exemple.env` en `.env`.

   ```bash
   mv exemple.env .env
   ```

5. Modifier le fichier `.env` et renseigner les valeurs appropriées pour les variables d'environnement.

6. Démarrer le serveur :

   ```bash
   npm start
   ```

   Le serveur sera accessible à l'adresse [http://localhost:3036](http://localhost:3036).

## Endpoints

Les endpoints suivants sont disponibles :

### Employés

- `GET /employe` : Récupère tous les employés.
- `GET /employe/:id` : Récupère un employé par son ID.
- `POST /employe` : Crée un nouvel employé.
- `DELETE /employe/:id` : Supprime un employé par son ID.
- `PUT /employe/:id` : Met à jour les informations d'un employé par son ID.

### Livres

- `GET /livre` : Récupère tous les livres.
- `GET /livre/:id` : Récupère un livre par son ID.
- `POST /livre` : Crée un nouveau livre.
- `DELETE /livre/:id` : Supprime un livre par son ID.
- `PUT /livre/:id` : Met à jour les informations d'un livre par son ID.

### Livres Empruntés

- `GET /livreemprunte` : Récupère tous les livres empruntés.
- `GET /livreemprunte/:id` : Récupère un livre emprunté par son ID.
- `POST /livreemprunte` : Crée un nouveau livre emprunté.
- `DELETE /livreemprunte/:id` : Supprime un livre emprunté par son ID.
- `PUT /livreemprunte/:id` : Met à jour les informations d'un livre emprunté par son ID.

### Livres en Prêt

- `GET /livreenpret` : Récupère tous les livres en prêt.
- `GET /livreenpret/:id` : Récupère un livre en prêt par son ID.
- `POST /livreenpret` : Crée un nouveau livre en prêt.
- `DELETE /livreenpret/:id` : Supprime un livre en prêt par son ID.
- `PUT /livreenpret/:id` : Met à

 jour les informations d'un livre en prêt par son ID.

### Membres

- `GET /membre` : Récupère tous les membres.
- `GET /membre/:id` : Récupère un membre par son ID.
- `POST /membre` : Crée un nouveau membre.
- `DELETE /membre/:id` : Supprime un membre par son ID.
- `PUT /membre/:id` : Met à jour les informations d'un membre par son ID.

## Auteur

Arfaoui Sofiane


# Mon application front-end

Ceci est le code source de mon application front-end développée avec React pour la bibliotheqye.

## Prérequis

Avant de pouvoir exécuter l'application, assurez-vous d'avoir les éléments suivants installés :

- Node.js : [Télécharger Node.js](https://nodejs.org)
- npm : Gestionnaire de paquets JavaScript inclus avec Node.js

## Installation

1. Clonez ce dépôt de code source :

   ```
   git clone https://github.com/soetna/BibliothequeETNA.git
   ```

2. Accédez au répertoire de l'application :

   ```
   cd Front
   ```

3. Installez les dépendances du projet à l'aide de npm :

   ```
   npm install
   ```


## Utilisation

1. Lancez l'application en mode développement :

   ```
   npm start
   ```

   L'application sera disponible à l'adresse [http://localhost:3000](http://localhost:3000).

2. Dans votre navigateur, accédez à [http://localhost:3000](http://localhost:3000) pour voir l'application en action.


---

Merci d'utiliser notre application front-end ! Si vous avez des questions ou des problèmes, n'hésitez pas à nous contacter.
