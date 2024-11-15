const Item = require('../models/Item');
const logger = require ('../utils/logger');

// Créer un nouvel élément
exports.createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    logger.error("Erreur lors de la création", error);
    res.status(400).json({ message: 'Erreur lors de la création'});
  }
};

// Récupérer tous les éléments
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    logger.error('Erreur lors de la récupération', error);
    res.status(500).json({ message: 'Erreur lors de la récupération' });
  }
};

// Mettre à jour un élément par ID
exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Élément non trouvé' });
    res.json(item);
  } catch (error) {
    logger.error('Erreur de mise à jour', error);
    res.status(400).json({ message: 'Erreur de mise à jour'});
  }
};

// Supprimer un élément par ID
exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Élément non trouvé' });
    res.json({ message: 'Élément supprimé' });
  } catch (error) {
    logger.error('Erreur de suppression', error);
    res.status(500).json({ message: 'Erreur de suppression' });
  }
};

exports.getItemById = async (req, res) => {
    try {
      const { id } = req.params; 
      const item = await Item.findById(id); 
  
      if (!item) {
        return res.status(404).json({ message: "L'élément n'a pas été trouvé" });
      }
  
      res.status(200).json(item);
    } catch (error) {
    logger.error('Erreur de la récupération par ID', error);
      res.status(500).json({ message: 'Erreur lors de la récupération' });
    }
  };