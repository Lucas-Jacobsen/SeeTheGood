import express from 'express';
import { getAllNewsletters, createNewsletter } from './newsletter.controller';

const newsletterRouter = express.Router();

newsletterRouter.get('/', getAllNewsletters);
newsletterRouter.post('/', createNewsletter);

export default newsletterRouter;
