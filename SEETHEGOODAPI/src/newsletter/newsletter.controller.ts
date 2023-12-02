import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import Email from './newsletter.model'; // Create this model

const sendEmail = async (req: Request, res: Response) => {
  const { to, subject, text } = req.body;

  // Create a new Email document
  const email = new Email({
    to,
    subject,
    text,
  });

  try {
    // Save the email to MongoDB
    await email.save();

    // Send the email
    const transporter = nodemailer.createTransport({
      service: 'YourEmailService',
      auth: {
        user: 'your@email.com',
        pass: 'yourPassword',
      },
    });

    const mailOptions = {
      from: 'your@email.com',
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(`Email error: ${error}`);
    res.status(500).json({ error: 'Email could not be sent' });
  }
};

export { sendEmail };
