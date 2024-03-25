import axios from "axios"
import { BASE_URL } from "../../shared/api"
import { ConsultationForm } from "./ConsultationForm"




export type SendConsutationSuccessful = {
    message: string
}

export const sendConsutation = async (data: ConsultationForm) => {
    const response = await axios.post<SendConsutationSuccessful>(BASE_URL + 'consultation', data)
    return response.data
}