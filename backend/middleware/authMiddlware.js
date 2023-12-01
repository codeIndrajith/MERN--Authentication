import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password');
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not Authorized, Invalid token');
    }
  } else {
    res.status(401);
    throw new Error('Not Authorized, no token');
  }
});

export { protect };

// we not the export default. this is protect one profile but assume e-commerce site it have to admin , users and many things. so need to only export
