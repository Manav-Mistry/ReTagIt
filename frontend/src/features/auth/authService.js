import axios from 'axios'

const API_URL = "http://localhost:5000/api/users"

const register = async (userData) => {
    const resp = await axios.post(API_URL, userData);
    
    if(resp.data){
        localStorage.setItem("user", JSON.stringify(resp.data));
        localStorage.setItem("token", resp.data.token);
    }
    
    return resp.data
}

const login = async (userData) => {
    const resp = await axios.post(`${API_URL}/login`, userData);
    
    if(resp.data){
        localStorage.setItem("user", JSON.stringify(resp.data));
        localStorage.setItem("token", resp.data.token);
    }
    
    return resp.data
}

const logout = async () => {
    localStorage.removeItem("user")
}

export const authService = {
    register, login, logout
}

export default authService 

