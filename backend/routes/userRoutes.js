import express from 'express';
import { protect } from '../middleware/authMiddlware.js';
import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js';
const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// same way
// router.get('/profile' , getUserProfile);
// router.put('/profile' , updateUserProfile)

export default router;
