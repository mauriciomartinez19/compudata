export const handleResetForm = <T>(
  handleSubmit: (prevState: T, formData: FormData) => Promise<T>,
  formRef: React.RefObject<HTMLFormElement>|null,
) => {
  return async (prevState: T, formData: FormData) => {
    const response = await handleSubmit(prevState, formData);
    formRef?.current?.reset();
    return response
  };
};