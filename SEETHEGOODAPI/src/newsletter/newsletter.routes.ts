import express from 'express';
import { getAllNewsletters, createNewsletter } from './newsletter.controller';

const router = express.Router();

router.get('/', getAllNewsletters);
router.post('/', createNewsletter);

export default router;
