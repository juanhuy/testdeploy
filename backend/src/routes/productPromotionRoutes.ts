import {Router } from 'express';
import { ProductPromotionController } from '../controllers/ProductPromotionController';

const router = Router();

router.get('/', ProductPromotionController.getAllProductPromotions);
router.get('/:productId/:promotionId', ProductPromotionController.getProductPromotionByIds);
router.put('/:productId/:promotionId', ProductPromotionController.updateProductPromotion);
router.post('/', ProductPromotionController.createProductPromotion);
router.delete('/:id', ProductPromotionController.deleteProductPromotion);

export default router;
