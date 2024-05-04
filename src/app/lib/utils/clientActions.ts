import toast from "react-hot-toast";

export const handleForm = <
  T extends { success?: boolean; errors?: Record<string, string> }
>(
  handleSubmit: (prevState: T, formData: FormData) => Promise<T>,
  formRef: React.RefObject<HTMLFormElement> | null,
) => {
  return async (prevState: T, formData: FormData) => {
    formRef?.current?.checkValidity();
    const response = await handleSubmit(prevState, formData);
    if (response.success) {
      toast.success("Email enviado con éxito");
      formRef?.current?.reset();
    } else {
      if (response.errors) {
        toast.error(Object.values(response.errors)[0])
      } else toast.error("Error al enviar el email");
    }
    return response;
  };
};
