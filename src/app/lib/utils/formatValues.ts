export const phoneNumber = (phoneNumber: string) => {
  if (phoneNumber.length === 17) return phoneNumber.slice(0, -1);
  if (phoneNumber.startsWith("+1")) {
    phoneNumber = phoneNumber.slice(2);
  }
  const input = phoneNumber.replace(/\D/g, "").substring(0, 10); // First ten digits of input only
  const areaCode = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);

  if (input.length > 6) {
    return `(${areaCode}) ${middle} - ${last}`;
  }
  if (input.length > 3) {
    return `(${areaCode}) ${middle}`;
  }
  if (input.length > 0) {
    return `(${areaCode}`;
  }
  return "";
};

export const reversePhoneNumber = (formattedNumber: string) => {
  return formattedNumber.replace(/[()-\s]/g, '').substring(0, 10);
}

const Format = {
  phoneNumber,
  reversePhoneNumber,
};

export default Format;