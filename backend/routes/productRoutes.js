import express from 'express';
import { getProduct, getProductSlug, getProductId, getCategories, search} from '../controller/productController.js';

const productRouter = express.Router();

productRouter.get('/', getProduct);

productRouter.get('/search', search);

productRouter.get('/categories', getCategories)

productRouter.get('/slug/:slug', getProductSlug);
  
productRouter.get('/:id', getProductId)

export default productRouter;
