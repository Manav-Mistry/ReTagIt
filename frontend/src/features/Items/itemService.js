import axios from "axios"

const API_URL = "http://localhost:5000/api/item"

const getAllItems = async () => {
    // get all items
    // TODO: create backend for get items
    const items = await axios.get(`${API_URL}/`);
    
    return items.data;
   
}

const addItem = async (item) => {
    const user = JSON.parse(localStorage.getItem("user"))
    item.user = user.email

    const resp = await axios.post(`${API_URL}/`, item, {
        headers:{
            "authorization" : `Bearer ${localStorage.getItem("token")}`
        }
    });

    return resp.data
}

const itemService = {
    getAllItems,
    addItem
}

export default itemService
