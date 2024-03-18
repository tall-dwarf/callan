import { createContext } from "react";

type FormContextType = {
    onError: () => void,
    onSuccess: () => void,
}

export const FormContext = createContext<null | FormContextType>(null);