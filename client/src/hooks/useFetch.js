import { useEffect, useState } from "react"
import BASE_URL from '../config/api'

const useFetch = (url) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const request = async () => {
        try {
            setLoading(true)

            const response = await fetch(`${BASE_URL}/${url}`)
            const responseData = await response.json()
            setData(responseData)
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        request()
    }, [])

    return { loading, data }
}

export default useFetch