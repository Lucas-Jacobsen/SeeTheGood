// import { Collection, MongoClient, ObjectId, InsertOneResult } from 'mongodb';
// import User from './user.model';

// class UserDAO {
//   private collection: Collection<User>;

//   constructor(db: MongoClient, collectionName: string) {
//     // Extract the database name from the connection URI

//     // Use the correct database from the client.
//     this.collection = db.db(process.env.DATABASE_NAME).collection<User>(collectionName);
//   }

//   async createUser(user: User): Promise<User> {
//     const result: InsertOneResult<User> = await this.collection.insertOne(user);
//     const insertedId = result.insertedId;

//     const insertedUser = await this.collection.findOne({ _id: insertedId });

//     if (!insertedUser) {
//       throw new Error('User not found after insert');
//     }

//     return insertedUser;
//   }

//   async getAllUsers(): Promise<User[]> {
//     console.log("In getAllUsers");
//     return this.collection.find().toArray();
//   }

//   async getUserById(userId: string): Promise<User | null> {
//     return this.collection.findOne({ _id: new ObjectId(userId) });
//   }
// }

// export default UserDAO;
