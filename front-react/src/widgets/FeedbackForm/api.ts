import axios from "axios";
import { FeedbackForm } from "./FeedbackForm";
import { BASE_URL } from "../../shared/api";



export const sendFeedbackForm = async (formState: FeedbackForm) => {
    const response = await axios.post(BASE_URL + 'feedback', formState)
    return response.data
}