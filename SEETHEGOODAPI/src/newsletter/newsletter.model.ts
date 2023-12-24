import { ObjectId } from 'mongodb';

class Newsletter {
  public _id: ObjectId | null;
  public date: Date;
  public html: string;
  public authors: string[];

  constructor(date: Date, html: string, authors: string[]) {
    this._id = null; 
    this.date = date;
    this.html = html;
    this.authors = authors;
  }
}

export default Newsletter;
