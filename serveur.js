const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connexion à MongoDB (remplace <url_mongodb> par ton URL MongoDB)
mongoose.connect('mongodb://localhost:27017/nombdd', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connexion MongoDB réussie'))
.catch((error) => console.error('Erreur de connexion à MongoDB :', error));

// Middleware pour traiter les données JSON
app.use(express.json());



