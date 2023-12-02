// user.model.ts
import { ObjectId } from 'mongodb';

class User {
  public _id?: ObjectId;
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

export default User;
