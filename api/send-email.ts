import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const logoUrl = "https://res.cloudinary.com/dxjilnp8x/image/upload/v1769571761/goatabout_yrstid.png";

  try {
    await transporter.sendMail({
      from: `"CabraDev" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Nuevo mensaje de contacto: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0,0,0,0.05);
              border: 1px solid #e0e0e0;
            }
            .header {
              background-color: #232757;
              padding: 30px;
              text-align: center;
            }
            .logo-container {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 15px;
            }
            .logo-img {
              width: 50px;
              height: 50px;
              object-fit: contain;
            }
            .brand-name {
              color: #F4BB46;
              font-size: 26px;
              font-weight: 700;
              margin: 0;
              letter-spacing: 0.5px;
            }
            .content {
              padding: 40px;
            }
            .info-item {
              margin-bottom: 25px;
            }
            .label {
              font-weight: bold;
              color: #232757;
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 1.2px;
              display: block;
              margin-bottom: 8px;
            }
            .value {
              color: #333333;
              font-size: 16px;
              line-height: 1.5;
              margin: 0;
            }
            .message-box {
              background-color: #f8f9fa;
              padding: 25px;
              border-radius: 8px;
              border-left: 4px solid #F4BB46;
              margin-top: 10px;
            }
            .footer {
              background-color: #f1f1f1;
              padding: 20px;
              text-align: center;
              font-size: 12px;
              color: #777;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo-container">
                <img src="${logoUrl}" alt="CabraDev Logo" class="logo-img">
                <h1 class="brand-name">CabraDev</h1>
              </div>
            </div>
            <div class="content">
              <div class="info-item">
                <span class="label">Remitente</span>
                <p class="value">${name}</p>
              </div>
              <div class="info-item">
                <span class="label">Correo Electrónico</span>
                <p class="value">${email}</p>
              </div>
              <div class="info-item">
                <span class="label">Mensaje</span>
                <div class="message-box">
                  <p class="value" style="white-space: pre-wrap; margin: 0;">${message}</p>
                </div>
              </div>
            </div>
            <div class="footer">
              Este correo fue enviado desde el formulario de contacto de tu portafolio personal de CabraDev.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}
