
export interface IGallery {
    id: number,
    img: string
}

export interface IAcademicPrograms {
    name: string,
    form_education: string,
}

export interface IUniversity {
    id: number,
    name: string,
    year: number,
    rating: number,
    students_cnt: number,
    price_year: number,
    price_hostel: number,
    logo: string,
    photo: string,
    information: string,
    created_at: string,
    updated_at: string,
    country: string
}

export interface IUniversityAll extends IUniversity {
    gallery: IGallery[],
    academic_programs: IAcademicPrograms[]

}