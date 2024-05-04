import { State } from "../actions";
import { CreateMailOptionsProps } from "../types/Mail";

const emailPattern =
  "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
const phoneNumberPatter = "[0-9+]{0,13}";

const validateEmail = (email?: string, isRequired?: boolean) => {
  if (!email) return validateEmpty(email, isRequired);
  const isValid = !!email && !!email.toLowerCase().match(emailPattern);
  return {
    isValid,
    message: isValid ? "" : "Inserte un correo válido",
  };
};

const validatePhoneNumber = (phoneNumber?: string, isRequired?: boolean) => {
  if (!phoneNumber) return validateEmpty(phoneNumber, isRequired);
  const isValid = !!phoneNumber && !!phoneNumber.match("[0-9+]{0,13}");
  return { isValid, message: isValid ? "" : "Inserte un numero de válido" };
};

const validateEmpty = (value: any, isRequired?: boolean) => {
  if (!isRequired) return {isValid: true, message:""}
  return { isValid: !!value, message: !!value ? "" : "Inserte un valor" };
};

interface ValidationsProps {
  isValid: boolean;
  message: string;
}

const checkIfFormIsValid = (validations: Record<string, ValidationsProps>) => {
  const errors: Record<string, string> = {};
  let hasErrors = false;
  Object.entries(validations).forEach((entries) => {
    if (entries[1].isValid) return;
    errors[entries[0]] = entries[1].message;
    hasErrors = true;
  });
  return { hasErrors, errors };
};

const validateEmailForm = (
  emailData: Partial<CreateMailOptionsProps>
): State => {
  const email = validateEmail(emailData.replyTo, true);
  const name = validateEmpty(emailData.name, true);
  const phoneNumber = validatePhoneNumber(emailData.phoneNumber);
  const content = validateEmpty(emailData.content, true);
  const validations = {
    email,
    name,
    phoneNumber,
    content,
  };
  const { hasErrors, errors } = checkIfFormIsValid(validations);
  if (!hasErrors) return { success: true };
  return { errors, success: false };
};

const Validations = {
  validateEmail,
  validatePhoneNumber,
  validateEmpty,
  validateEmailForm,
  emailPattern,
  phoneNumberPatter,
};

export default Validations;
