const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/nombdd', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connexion MongoDB réussie'))
.catch((error) => console.error('Erreur de connexion à MongoDB :', error));


app.use(express.json());
