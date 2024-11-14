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


// Créer un nouvel élément
app.post('/items', async (req, res) => {
    try {
        console.log(req.body);
        const newItem = new Item(req.body);
        console.log(newItem);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Lire tous les éléments
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});