import { useState } from "react";
import { FieldValues, useForm as reactHookForm, Resolver } from "react-hook-form"


export default function useForm<T extends FieldValues>(res: Resolver<T>) {
    const form = reactHookForm({ resolver: res, })
    const [isLoad, setIsLoad] = useState(false)
    const [error, setError] = useState('')
    const [successful, setSuccessful] = useState(false)

    return {
        error: { setError, error },
        successful: { setSuccessful, successful },
        load: { setIsLoad, isLoad },
        form
    }
}