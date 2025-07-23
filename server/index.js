import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yogithashreedc@gmail.com', // Replace with your email
    pass: 'rauw deuu ltcr vwgy'     // Replace with your app password
  }
});

// Contact form endpoint
app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'yogithashreedc@gmail.com', // Replace with your email
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #64FFDA;">New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 1px solid #ddd;">
          <h3>Message:</h3>
          <p style="line-height: 1.6;">${message}</p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This message was sent through your portfolio website contact form.
        </p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});