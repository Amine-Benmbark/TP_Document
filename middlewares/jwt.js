import jwt from 'jsonwebtoken';

export const verifyJwt = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Token JWT requis' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token JWT invalide ou expiré' });
  }
};

export const generateToken = (apiKey) => {
    try {

      if (!apiKey) {
        throw new Error("API Key manquante");
      }
  
      // Signer le JWT
      const token = jwt.sign(
        { apiKey: apiKey }, 
        process.env.JWT_SECRET, 
        { expiresIn: '12h' } 
      );
  
      return token;
  
    } catch (error) {
      console.error('Erreur lors de la génération du token', error);
      throw error;
    }
  };