import React from "react";
import FormSuccessful from "../ui/FormSuccessful";
import FormError from "../ui/FormError";

type FormStatusProps = {
    children: React.ReactNode,
    formStatus: "successful" | 'error' | 'work',
    resetForm: () => void
}

export default function FormStatus({ children, formStatus, resetForm }: FormStatusProps) {

    if (formStatus === 'successful') return <FormSuccessful />
    if (formStatus === 'error') return <FormError resetForm={() => resetForm()} />

    return children
}