import { BASE_URL } from "../../shared/api"
import { IUniversityItem, IUniversityList } from "./types"
import axios from 'axios';

export type UniversitiesParams = {
    rating: number,
    price: number,
    page: number
    sortOrder: string,
    sortField: string,
    name: string,
    countries: number[],
    programs: number[],
}

type LoadUniversitiesResponse = {
    data: IUniversityList[],
    total: number,
    current_page: number
    last_page: number
}

export const loadUniversities = async (params: UniversitiesParams): Promise<LoadUniversitiesResponse> => {
    const response = await axios.get(BASE_URL + 'university', {params: params})
    return response.data
}

export const loadUniversity = async (id: number): Promise<IUniversityItem> => {
    const response = await axios.get(BASE_URL + `university/${id}`)
    return response.data
}