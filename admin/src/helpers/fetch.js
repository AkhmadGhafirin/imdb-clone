import { BASE_URL } from "../config/api"

export const fetchHelper = (url = "", method = "GET", data = {}) => {
    let option = {}
    if (method !== "GET") {
        option = {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
    }

    if (localStorage.getItem('access_token')) {
        option.headers = {
            "Content-Type": "application/json",
            "access_token": localStorage.getItem('access_token')
        }
    }

    return fetch(`${BASE_URL}/${url}`, option).then(async (response) => {
        if (!response.ok) {
            throw await response.text()
        }

        return response.json()
    })
}