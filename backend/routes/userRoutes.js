import express from 'express';
const router = express.Router();
import { authUser, registerUser } from '../controllers/userController.js';

router.route('/login').post(authUser);
router.route('/register').post(registerUser);

export default router;
