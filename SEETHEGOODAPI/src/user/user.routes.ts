import express, { Request, Response, NextFunction } from 'express';
import { MongoClient, MongoClientOptions } from 'mongodb';
import UserController from './user.controller';

const router = express.Router();

const DATABASE_URL = process.env.DATABASE_URL|| ''; // Update with your MongoDB connection string
const DATABASE_NAME = process.env.DATABASE_NAME || '';
const COLLECTION_NAME = 'users';

// Define MongoClientOptions
const mongoClientOptions: MongoClientOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
} as MongoClientOptions; // <-- Add this type assertion

router.use(async (req: Request & { dbClient?: MongoClient; db?: any }, res: Response, next: NextFunction) => {
  try {
    const client = new MongoClient(DATABASE_URL, mongoClientOptions);
    await client.connect();
    req.dbClient = client;
    req.db = client.db(DATABASE_NAME);

    // Instantiate UserController here with the req object
    const userController = new UserController(req.db, COLLECTION_NAME);

    // Now you can use userController in the subsequent routes
    router.post('/users', userController.createUser.bind(userController));
    router.get('/users', userController.getAllUsers.bind(userController));
    router.get('/users/:id', userController.getUserById.bind(userController));

    next();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.use((req: Request & { dbClient?: MongoClient }, res: Response) => {
  if (req.dbClient) {
    req.dbClient.close();
  }
});

export default router;
