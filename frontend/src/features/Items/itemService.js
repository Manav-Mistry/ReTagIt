import axios from "axios"

const url = "http://localhost:5000/"

const getAllItems = async () => {
    // get all items
    // TODO create backend for get items
    const items = await axios.get(`${url}/item`);
    
    return items.data;
   
}

const addItem = async (item) => {
    // TODO: getMe and append useremail to item object
    const me = await axios.get(`${url}/users/me`)
    item.user = me.email

    // TODO: add headers with request
    const resp = await axios.post(`${url}/item`, item, {
        headers:{
            "authorization" : `Bearer ${localStorage.getItem("token")}`
        }
    });

    // const respToken = await axios.get(tokenUrl, {
    //     headers:{
    //       "authorization" : `Bearer ${localStorage.getItem("token")}`
    //     }
    // })

    return resp.data
}

const itemService = {
    getAllItems,
    addItem
}

export default itemService
