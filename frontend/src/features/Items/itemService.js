import axios from "axios"

const API_URL = "http://localhost:5000/api/item"
const API_URL_IMG = "http://localhost:5000/api/image"


const getAllItems = async () => {
    // get all items
    // TODO: create backend for get items
    console.log("above get request")
    const items = await axios.get(`${API_URL}/`);
    console.log("IN item service", items.data)
    return items.data;
   
}

// TODO: NEW
const addImage = async (formdata) => {
    console.log("asdasd sdasda")
    console.log(formdata)
    const resp = await axios.post(`${API_URL_IMG}/upload`, formdata, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
    console.log("response data",resp.data)
    return resp.data
}

const addItem = async (item) => {
    const user = JSON.parse(localStorage.getItem("user"))
    item.user = user.email
    console.log("item in addItem", item)

    const resp = await axios.post(`${API_URL}/`, item, {
        headers:{
            "authorization" : `Bearer ${localStorage.getItem("token")}`
        }
    });

    return resp.data
}

const itemService = {
    getAllItems,
    addItem,
    addImage
}

export default itemService
