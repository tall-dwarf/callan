import { useState } from "react";



export default function useForm<T extends object>(defaultState: T) {
    const [formState, setFormState] = useState(defaultState)

    const updateState = (key: keyof T, value: string | number) => {
        setFormState({...formState, [key]: value})
    }

    const manyUpdateState = (state: T) => {
        setFormState(state)
    }

    return{
        formState,
        updateState,
        manyUpdateState
    }
}