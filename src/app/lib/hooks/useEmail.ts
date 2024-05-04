import { useRef, useState } from "react";
import { useFormState } from "react-dom";
import { createEmail } from "../actions";
import { handleForm } from "../utils/clientActions";

const useEmail = () => {
  const ref = useRef<HTMLFormElement>(null);
  const initialState = { success: undefined, errors: {} };
  const [state, dispatch] = useFormState(
    handleForm(createEmail, ref),
    initialState
  );
  return {ref, dispatch, state}
}

export default useEmail