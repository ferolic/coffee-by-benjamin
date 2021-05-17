import express from 'express';
const router = express.Router();

import {
  getProducts,
  getProductById,
  getProductByName,
} from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);
router.route('/name').get(getProductByName);

export default router;
