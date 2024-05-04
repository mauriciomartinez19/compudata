"use server";
import { sendMail } from "./utils/nodemailer";
import Validations from "./utils/validations";
export interface State {
  errors?: Record<string, string>;
  success?: boolean;
}
export const createEmail = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  const body = {
    name: formData.get("name") as string,
    replyTo: formData.get("email") as string,
    content: formData.get("content") as string,
    phoneNumber: formData.get("phone") as string,
  };
  const { success, errors } = Validations.validateEmailForm(body);
  if (!success) return { success, errors };
  try {
    const mail = await sendMail(body);
    console.log({mail})
    return { success: true };
  } catch (e) {
    console.log({e})
    return { errors: { serverError: "Error al enviar el email" } };
  }
};
