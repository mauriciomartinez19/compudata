"use client";
import { createEmail } from "@/app/lib/actions";
import { handleResetForm } from "@/app/lib/utils/actions";
import { useRef } from "react";
import { useFormState } from "react-dom";

const EmailForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(
    handleResetForm(createEmail, ref),
    initialState
  );
  console.log({ state });
  return (
    <form action={dispatch} className="space-y-8">
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
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          required
        />
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
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900 text-white"
        >
          Teléfono
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Número de teléfono"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
          required
        />
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
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-[color:var(--nav-background)] py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
      >
        Enviar mensaje
      </button>
    </form>
  );
};

export default EmailForm;
