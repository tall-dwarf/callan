import { useState } from "react";



export default function useCheckboxes<T extends string>(defaultData: { [K in T] : number[]}){

    const [data, setData] = useState(defaultData)

    const updateData = (key: keyof typeof defaultData, value: number) => {
        if(data[key].includes(value)){
            return setData({...data, [key]: data[key].filter(itm => itm != value)})
        }
        
        return setData({...data, [key]: [...data[key], value]})
    }

    return{
        data,
        updateData
    }
}