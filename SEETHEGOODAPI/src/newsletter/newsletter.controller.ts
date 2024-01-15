import { Request, Response } from 'express';
import Newsletter from './newsletter.model';

export const getAllNewsletters = async (req: Request, res: Response) => {
  try {
    const newsletters = await Newsletter.find();
    res.json(newsletters);
    console.log(newsletters)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createNewsletter = async (req: Request, res: Response) => {
  const { date, html, authors } = req.body;

  if (!date || !html || !authors || authors.length === 0) {
    return res.status(400).json({ error: 'Invalid request. Check your data.' });
  }

  try {
    const newNewsletter = new Newsletter({ date, html, authors });
    const savedNewsletter = await newNewsletter.save();
    //res.json(savedNewsletter);
    console.log("New Newsletter: " , savedNewsletter);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
