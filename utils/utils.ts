export const validateNumber = (phoneNumber: any) => {
  const result = phoneNumber.replace(/^0/, "");
  return result;
};
