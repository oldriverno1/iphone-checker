import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

export interface IEmailNotifier {
  sendNotification(email: string, message: string): Promise<void>;
}

export class EmailNotifier implements IEmailNotifier {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendNotification(email: string, message: string): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // list of receivers
      subject: 'iPhone Availability Notification', // Subject line
      text: message, // plain text body
    };

    await this.transporter.sendMail(mailOptions);
  }
}
