import { BASE_URL } from "../../shared/api"
import { IUniversity, IUniversityAll } from "./types"
import axios from 'axios';

type loadUniversitiesParams = {
    page: number
}

export const loadUniversities = async (params: loadUniversitiesParams): Promise<IUniversityAll[]> => {
    const response = await axios.get(BASE_URL + 'university', {params: params})
    return response.data
}