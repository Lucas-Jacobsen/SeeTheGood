require('dotenv').config();

import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose'; // Import ConnectOptions from mongoose
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

// Import your route files
import userRoutes from './user/user.routes';
import { MongoClientOptions } from 'mongodb';

const mongooseOptions: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions;

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(compression());

// Your API routes
app.use('/api', userRoutes);  // Use '/api' instead of '/api/users'

// Error handling middleware
app.use((err: { stack: any }, req: any, res: { status: (arg0: number) => any; send: (arg0: string) => void }, next: any) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Check if DATABASE_URL is defined before connecting to MongoDB
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error('DATABASE_URL is not defined. Please check your environment configuration.');
} else {
  mongoose.connect(databaseUrl, mongooseOptions)
    .then(() => {
      console.log('Database Connected');
      app.listen(port, () => {
        console.log(`STG API running on port ${port}.`);
      });
    })
    .catch((error) => {
      console.error('MongoDB connection error:', error);
    });
}
