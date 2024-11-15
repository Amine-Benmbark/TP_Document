const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/items', itemController.createItem);       // Créer un nouvel élément
router.get('/items', itemController.getItems);           // Récupérer tous les éléments
router.put('/items/:id', itemController.updateItem);     // Mettre à jour un élément par ID
router.delete('/items/:id', itemController.deleteItem);  // Supprimer un élément par ID

module.exports = router;
