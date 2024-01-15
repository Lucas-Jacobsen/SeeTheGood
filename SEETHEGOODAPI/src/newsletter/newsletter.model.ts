// server/models/newsletter.model.ts
import mongoose, { Document } from 'mongoose';

interface INewsletter extends Document {
  date: Date;
  html: string;
  authors: string[];
}

const newsletterSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  html: { type: String, required: true },
  authors: { type: [String], required: true },
});

const Newsletter = mongoose.model<INewsletter>('Newsletter', newsletterSchema);

export default Newsletter;
