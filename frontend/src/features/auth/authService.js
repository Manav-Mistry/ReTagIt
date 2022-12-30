import axios from 'axios'

const API_URL = "http://localhost:5000/api/users"

const register = async (userData) => {
    const resp = await axios.post(API_URL, userData);
    // console.log(userData)
    if(resp.data){
        localStorage.setItem("user", JSON.stringify(resp.data));
    }
    return resp.data;
}

export const authService = {
    register,
}

export default authService 

