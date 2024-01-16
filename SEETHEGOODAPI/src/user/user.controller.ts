// user.controller.ts
import { Request, Response } from 'express';
import User from './user.model';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const newsletters = await User.find();
    res.json(newsletters);
    console.log(newsletters)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { _id, name, email } = req.body;

  if (!_id || !name || !email) {
    return res.status(400).json({ error: 'Invalid request. Check your data.' });
  }

  try {
    const newUser = new User({ _id, name, email });
    const savedUser = await newUser.save();
    res.json(savedUser);
    console.log("New User: " , savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

