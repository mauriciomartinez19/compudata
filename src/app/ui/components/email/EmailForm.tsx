"use client";
import Validations from "@/app/lib/utils/validations";
import useEmail from "@/app/lib/hooks/useEmail";
import { Toaster } from "react-hot-toast";
import { useFormStatus } from "react-dom";

const EmailForm = () => {
  const { ref, dispatch } = useEmail();
  return (
    <form ref={ref} action={dispatch} className="group">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          aria-describedby="email-error"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 invalid:[&:not(:placeholder-shown)]:border-red-500 peer"
          pattern={Validations.emailPattern}
          required
        />
        <span className="mt-2 text-sm text-red-500 invisible peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible">
          Inserte un correo válido
        </span>
      </div>
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 text-white"
        >
          Nombre
        </label>
        <input
          id="name"
          name="name"
          placeholder="Nombre"
          aria-describedby="name-error"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
          required
        />
        <span className="mt-2 text-sm text-red-500 invisible peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible">
          Inserte su nombre
        </span>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900 text-white"
        >
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Número de teléfono"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
          pattern={Validations.phoneNumberPatter}
        />
        <span className="mt-2 text-sm text-red-500 invisible peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible">
          Inserte un número de teléfono válido
        </span>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 text-white"
        >
          Mensaje
        </label>
        <textarea
          id="content"
          name="content"
          placeholder="Deja tu mensaje..."
          aria-describedby="content-error"
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
          required
        ></textarea>
        <span className="mt-2 text-sm text-red-500 invisible peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible">
          Inserte un mensaje
        </span>
      </div>
      <SubmitButton />
      <Toaster />
    </form>
  );
};

export default EmailForm;

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-[color:var(--button-background)] py-3 px-5 text-sm font-medium text-center text-white rounded-lg hover:bg-primary-800 disabled:opacity-60 w-full"
      disabled={pending}
    >
      {pending ? "Enviando" : "Enviar"} mensaje
    </button>
  );
}
