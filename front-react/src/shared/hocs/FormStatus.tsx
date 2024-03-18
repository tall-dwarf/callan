import { useState } from "react";
import FormSuccessful from "../ui/FormSuccessful";
import FormError from "../ui/FormError";
import { FormContext } from "../context/formContext";

type FormStatusProps = {
    children: JSX.Element
}

export default function FormStatus({ children }: FormStatusProps) {
    const [formStatus, setFormStatus] = useState<"successful" | 'error' | 'work'>('work')


    if (formStatus === 'successful') return <FormSuccessful />
    if (formStatus === 'error') return <FormError resetForm={() => setFormStatus('work')} />

    return <FormContext.Provider
        value={{
            onError: () => setFormStatus('error'),
            onSuccess: () => setFormStatus('successful'),
        }}>
        <>{children}</>
        </FormContext.Provider>
}