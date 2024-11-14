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
// Lire un élément par ID
app.get('/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Élément non trouvé" });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
