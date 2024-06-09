import { Product } from '../db/Product.js';

export const getAllProducts = () => Product.find();

export const addProduct = (product) => Product.create(product);

export const deleteProduct = (productId) =>
  Product.findByIdAndDelete(productId);

export const patchProduct = (productId, payload) =>
  Product.findByIdAndUpdate(productId, payload, { new: true });
