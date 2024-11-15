import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import routes from './routes/index.js'

dotenv.config();

const app = express();

// Connexion à MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

app.use(routes); 

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
