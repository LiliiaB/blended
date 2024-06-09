import express, { Router } from 'express';
import {
  addProductController,
  deleteProductController,
  getAllProductsController,
  patchProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getAllProductsController));

router.post('/', ctrlWrapper(addProductController));

router.delete('/:productId', ctrlWrapper(deleteProductController));

router.patch('/:productId', ctrlWrapper(patchProductController));

export default router;
