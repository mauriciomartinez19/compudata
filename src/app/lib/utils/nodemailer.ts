import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { createTemplate } from "./mailTemplate";
import { CreateMailOptionsProps } from "../types/Mail";

const username = process.env.BURNER_USERNAME;
const password = process.env.BURNER_PASSWORD;
const myEmail = process.env.PERSONAL_EMAIL;

const createMailOptions = (props: CreateMailOptionsProps) => {
  const {name, replyTo} = props
  const templateMailOptions: Mail.Options = {
    to: myEmail,
    from: {
      name,
      address: username!,
    },
    subject: "Consulta pagina web",
    html: createTemplate(props),
    replyTo
  };
  return templateMailOptions;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: username,
    pass: password,
  },
});

export const sendMail = async (options: CreateMailOptionsProps) => {
  const mailOptions = createMailOptions(options);
  console.log({mailOptions})
  return await transporter.sendMail(mailOptions);
};
