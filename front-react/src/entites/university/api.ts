import { BASE_URL } from "../../shared/api"
import { IUniversityItem, IUniversityList } from "./types"
import axios from 'axios';

export type PrimitivesPrams = {
    rating?: number,
    price?: number,
    page: number
    sortOrder?: string,
    sortField?: string,
    name?: string,
}

export type CompositeParams = {
    countries?: number[],
    programs?: number[],
}

export type LoadUniversitiesParams = CompositeParams & PrimitivesPrams

type LoadUniversitiesResponse = {
    data: IUniversityList[],
    total: number,
    current_page: number
}

export const loadUniversities = async (params: LoadUniversitiesParams): Promise<LoadUniversitiesResponse> => {
    const response = await axios.get(BASE_URL + 'university', {params: params})
    return response.data
}

export const loadUniversity = async (id: number): Promise<IUniversityItem> => {
    const response = await axios.get(BASE_URL + `university/${id}`)
    return response.data
}