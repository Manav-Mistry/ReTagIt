import axios from "axios"

const API_URL = "http://localhost:5000/api/requestedItem"

const addRequestedItem = async (r_item, user) => {
    const item = r_item
    const loggedUser = user

    const item_user = {
        item,
        loggedUser
    }
    const resp = await axios.post(`${API_URL}/`, item_user, {
        headers: {
            "authorization" : `Bearer ${localStorage.getItem("token")}`
        }
    })
    return resp.data
}

const requestedItemService = {
    addRequestedItem
}

export default requestedItemService