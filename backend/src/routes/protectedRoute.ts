import { Router } from 'express';
import { protect, protectAdmin } from '../middleware/keycloakAuth';

const router = Router();

router.get('/user', protect(), (req, res) => {
    res.json({ message: 'User route protected by Keycloak' });
});

router.get('/admin', protectAdmin(), (req, res) => {
    res.json({ message: 'Admin only area' });
});

export default router;
