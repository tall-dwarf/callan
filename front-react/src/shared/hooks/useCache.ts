import axios from "axios"
import { useEffect, useState } from "react"



export default function useCache<T>(url: string, key: string, defaultState: T) {
    const [state, setState] = useState<T>(defaultState)

    useEffect(() => {
        const cacheData = localStorage.getItem(key)
        
        if (cacheData) {
            return setState(JSON.parse(cacheData))
        }

        axios.get(url).then(res => {
            setState(res.data)
            localStorage.setItem(key, JSON.stringify(res.data))
        })

    }, [])

    return {
        state
    }
}