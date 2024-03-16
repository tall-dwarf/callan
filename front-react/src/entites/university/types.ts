
export interface IGallery {
    id: number,
    img: string,
    small_img: string
}

export interface IAcademicProgram {
    id: number
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
    country: ICountry
}

export interface IUniversityAll extends IUniversity {
    gallery: IGallery[],
    academic_programs: IAcademicProgram[]
}

export interface ICountry {
    id: number,
    name: string
}


export interface Ipropgram {
    id: number,
    name: string,
    form_education: "Магистратура" | "Бакалавриат" | "Докторантура" | "Языковые курсы" | "Подготовка к университету",
}
