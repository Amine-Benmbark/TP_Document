const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');
require('dotenv').config();

const app = express();

// Connexion à MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', itemRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
