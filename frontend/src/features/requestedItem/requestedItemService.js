import axios from "axios"

const API_URL = "http://localhost:5000/api/requestedItem"

const addRequestedItem = async (r_item_user) => {
    console.log("In Service",r_item_user)
    const r_item_user_seperated = {
        "item" : r_item_user.item,
        "user" : r_item_user.user
    }
    console.log(r_item_user.item, r_item_user.user)

    const resp = await axios.post(`${API_URL}/`, r_item_user_seperated, {
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