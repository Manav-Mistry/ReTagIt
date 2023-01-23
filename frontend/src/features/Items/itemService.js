import axios from "axios"

const getAllItems = () => {
    const url = "http://localhost:5000"
    const items = axios.get(url+"/items");
    
    return items.data;
   
}

const itemService = {
    getAllItems,
}

export default itemService
