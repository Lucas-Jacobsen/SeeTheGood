import mongoose, { Document, Schema } from 'mongoose';

interface EmailDocument extends Document {
  to: string;
  subject: string;
  text: string;
}

const EmailSchema = new Schema({
  to: { type: String, required: true },
  subject: { type: String, required: true },
  text: { type: String, required: true },
});

const Email = mongoose.model<EmailDocument>('Email', EmailSchema);

export default Email;
