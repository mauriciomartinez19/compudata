"use server"
import { sendMail } from "./utils/nodemailer";

export type State = {
  errors?: any;
  message?: string | null;
};
export const createEmail = async (prevState: State, formData: FormData) => {
  const body = {
    name: formData.get('name') as string,
    replyTo: formData.get('email') as string,
    content: formData.get('content') as string,
    phoneNumber: formData.get('phone') as string,
  }
  try {
    const mail = await sendMail(body);
    console.log({mail})
    return {errors: {}, message: "success"}
  }catch (e) {
    return {errors: {e}, message: ""}
  }
};