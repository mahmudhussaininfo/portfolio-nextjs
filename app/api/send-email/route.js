import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"My Portfolio" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: "Contact Form Submission",
      html: `
      
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>

      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json(
      { message: "Email sent successfully" },
      { status: 200 },
      { success: true }
    );
  } catch (error) {
    console.log(error.message);
    return Response.json(
      { error: "Email failed" },
      { status: 500 },
      { success: false }
    );
  }
}
