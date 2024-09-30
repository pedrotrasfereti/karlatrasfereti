import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { subject, text } = req.body;

  const msg = {
    to: process.env.SENDGRID_EMAIL_RECIPIENT,
    from: process.env.SENDGRID_EMAIL_SENDER,
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
