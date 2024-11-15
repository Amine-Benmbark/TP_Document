import ApiKey from '../models/ApiKey.js';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

// Ajouter une nouvelle API Key
export const addApiKey = async (req, res) => {
  try {
    const newApiKey = new ApiKey({
      key: uuidv4(), 
    });

    await newApiKey.save();

    res.status(201).json({ apiKey: newApiKey.key });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la clé API' });
  }
};

// Authentifier l'utilisateur via API Key
export const authenticateApiKey = async (req, res) => {
  const { apiKey } = req.body;

  if (!apiKey) {
    return res.status(400).json({ message: 'API Key est requise' });
  }

  try {
    const keyRecord = await ApiKey.findOne({ key: apiKey });

    if (!keyRecord) {
      return res.status(401).json({ message: 'Clé API invalide' });
    }

    const token = jwt.sign(
      { apiKey: keyRecord.key },
      process.env.JWT_SECRET,
      { expiresIn: '12h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'authentification de la clé API' });
  }
};
