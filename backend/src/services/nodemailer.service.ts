import { SESClient } from "@aws-sdk/client-ses";
import nodemailer from "nodemailer";
import nodemailerSesTransport from "nodemailer-ses-transport";

const ses = new SESClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// 👇 create nodemailer transporter using SES
const transporter = nodemailer.createTransport(
  nodemailerSesTransport({
    ses,
    aws: { region: process.env.AWS_REGION! },
  }),
);

export default transporter;
