import transporter from "../services/nodemailer.service";

export const sendEmail = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to,
      subject,
      html,
    });

    return info;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Failed to send email");
  }
};
