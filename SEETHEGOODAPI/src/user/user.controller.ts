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
  
  const { name, email } = req.body;


  try {
 // Get the length of the users list in the database
 const usersCount = await User.countDocuments();

 // Set the _id to be one more than the length of the users list
 const newUser = new User({ _id: usersCount + 1, name, email });
 const savedUser = await newUser.save();
    res.json(savedUser);
    console.log("New User: " , savedUser);
  } catch (error) {
    console.error("Error creating user:", error); // Log the error
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

