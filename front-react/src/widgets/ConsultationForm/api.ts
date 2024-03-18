import axios from "axios"
import { BASE_URL } from "../../shared/api"


export type ConsultationData = {
    name: string, 
    date: string, 
    city: string,
    phone: string, 
    email: string, 
    english: string
}

export type SendConsutationSuccessful = {
    message: string
}

export const sendConsutation = async (data: ConsultationData) => {
    const response = await axios.post<SendConsutationSuccessful>(BASE_URL + 'consultation', data)
    return response.data
}