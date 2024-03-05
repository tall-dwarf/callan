import { createContext } from "react";

type ModalContextType = {
    open: () => void
}

export const ModalContext = createContext<null | ModalContextType>(null);