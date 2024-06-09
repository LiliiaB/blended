import createHttpError from 'http-errors';
import {
  getAllProducts,
  addProduct,
  deleteProduct,
  patchProduct,
} from '../services/products.js';

export const getAllProductsController = async (req, res, next) => {
  const products = await getAllProducts();

  res.json({
    data: products,
  });
};

export const addProductController = async (req, res, next) => {
  const product = await addProduct(req.body);

  res.status(201).json({
    data: product,
  });
};

export const deleteProductController = async (req, res, next) => {
  const { productId } = req.params;
  const product = await deleteProduct(productId);

  if (!product) {
    next(createHttpError(404, 'Product not found'));
    return;
  }
  res.sendStatus(204);
};

export const patchProductController = async (req, res, next) => {
  const { productId } = req.params;
  const result = await patchProduct(productId, req.body);

  if (!result) {
    next(createHttpError(404, 'Product not found'));
    return;
  }
  res.json({
    data: result,
  });
};
