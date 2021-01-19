const nodemailer = require('nodemailer');
require('dotenv').config();

const emailer = async (req, res) => {
  const { userName, userEmail, subject, message } = req.body;

  let transpoter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let visitor = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "Let's Talk",
    html: `
    <h3>Hi ${userName},</h3>
    <p>I have received your message. Glad to see you!! </p>
    <p>We will connect you soon.</p>
    <p>Thank you!!</p>
    `,
  };

  let author = {
    from: userEmail,
    to: process.env.EMAIL_AUTHOR,
    subject: subject,
    html: `
    <h3>From ${userName},</h3>
    <p>Email: ${userEmail}</p>
    <p>Subject: ${subject}</p>
    <p>${message}</p>
    `,
  };

  transpoter.sendMail(visitor, (err, data) => {
    if (err) {
      console.log('Visiter: Error Occurs', err);
    } else {
      console.log('Visiter: Email Sent');
    }
  });

  transpoter.sendMail(author, (err, data) => {
    if (err) {
      console.log('Author: Error Occurs', err);
    } else {
      console.log('Author: Email Sent');
    }
  });
};

module.exports = emailer;
