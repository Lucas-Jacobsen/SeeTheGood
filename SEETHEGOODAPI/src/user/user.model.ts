// user.model.ts
import { ObjectId } from 'mongodb';
import mongoose, { Document } from 'mongoose';

interface IUser extends Document {
   _id?: Number;
    name: string;
    email: string;
}

const userSchema = new mongoose.Schema({
  _id: { type: Number, required: true},
  name: { type: String, required: true},
  email: {type: String, required: true}
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
