// user.model.ts
import { ObjectId } from 'mongodb';
import mongoose, { Document } from 'mongoose';

interface IUser extends Document {
   _id?: ObjectId;
    name: string;
    email: string;
}

const userSchema = new mongoose.Schema({
  _id: { type: ObjectId, required: true},
  name: { type: String, required: true},
  email: {type: String, required: true}
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
