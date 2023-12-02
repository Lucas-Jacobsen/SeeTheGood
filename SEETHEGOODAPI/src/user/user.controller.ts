// user.controller.ts
import { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import UserDAO from './user.dao';
import User from './user.model';

class UserController {
  private dao: UserDAO;

  constructor(db: MongoClient, collectionName: string) {
    this.dao = new UserDAO(db, collectionName);
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = new User(req.body.name, req.body.email);
      const createdUser = await this.dao.createUser(user);
      res.status(201).json(createdUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.dao.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const user = await this.dao.getUserById(userId);

      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default UserController;
