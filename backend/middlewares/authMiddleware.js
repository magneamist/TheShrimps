import { Clerk } from '@clerk/clerk-sdk-node';

export const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const clerkUser = await Clerk.verifySessionToken(token);
    req.user = clerkUser;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
