import axios from "axios";
import { FeedbackFormSate } from "./FeedbackForm";
import { BASE_URL } from "../../shared/api";



export const sendFeedbackForm = async (formState: FeedbackFormSate) => {
    const response = await axios.post(BASE_URL + 'feedback', formState)
    return response.data
}