//api/index.js
import axios from 'axios'

const API_URL = "http://localhost:8084/api/v1"

export function fetchUsers() {
    return axios.get(`${API_URL}/user`)
}

export function fetchUser(userId) {
    return axios.get(`${API_URL}/user/${userId}`)
}

/*export function getByUsername(username) {
    return axios.get(`${API_URL}/username/${username}`)
}*/

export function updateUser (userResponse) {
    return axios.put(`${API_URL}/user/${userResponse.id}/`, userResponse)
}
  
export function saveUser (user, jwt) {
    return axios.post(`${API_URL}/user`, user, { headers: { Authorization: `Bearer: ${jwt}` } })
}

export function deleteUser (userId) {
    return axios.delete(`${API_URL}/user/${userId}`)
}

export function authenticate (userData) {
    return axios.post(`${API_URL}/login`, userData)
}