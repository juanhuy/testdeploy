import {Router } from 'express';
import { ProductItemController } from '../controllers/ProductItemController';

const router = Router();

router.get('/', ProductItemController.getAllProductItems);
router.post('/', ProductItemController.createProductItem);
router.delete('/:id', ProductItemController.deleteProductItem);

export default router;