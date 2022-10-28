import axios from "axios";
import Login from "../components/main/content/login/Login";


const instance = axios.create({
    withCredentials:true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {'API-KEY': '6ae76a20-7f78-4a62-b0d0-04c1bb0983c8'}
})



export const getApiUsers = (pageActiv, pageCount) => {
    return instance.get(`users?page=${pageActiv}&count=${pageCount}`)
    .then(response => response.data)
}

// export const getApiPages = (page, pageCount) => {
//     return instance.get(`users?page=${page}&count=${pageCount}`)
//     .then(response => response.data)
// }


export const getApiWatchFalse = (id) => {
    return instance.delete(`follow/${id}`)
    .then(response => response.data)
}

export const getApiWatchTrue = (id) => {
    return instance.post(`follow/${id}`)
    .then(response => response.data)
}


export const getApiHeaderAuthMe = () => {
    return instance.get('auth/me')
    .then(response => response.data)
}

export const getApiLogin =  {
    login(email, password, rememberMe) {
        return instance.post('/auth/login', {email, password, rememberMe})
    .then(response => response.data)
    },

    logout() {
        return instance.delete('/auth/login')
    .then(response => response.data)
    },
    
}




export const getApiHome = (userId) => {
    return instance.get(`profile/${userId}`)
    .then(response => response.data)
}

export const getApiStatus = (userId) => {
    return instance.get(`profile/status/${userId}`)
    .then(response => response.data)
}

export const updateApiStatus = (status) => {
    return instance.put(`profile/status`, {status: status})
    .then(response => response.data)
}