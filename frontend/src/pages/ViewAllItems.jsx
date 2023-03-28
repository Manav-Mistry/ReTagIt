import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Item from '../components/Item';
import "../style/items.css"
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function ViewAllItems() {
    const { isError, isLoading, isSuccess, message, items } = useSelector((state) => state.item)

    const [userItems, setUserItem] = useState([])
    const [exceptUserItems, setExceptUserItems] = useState([])

    useEffect(() => {
      setUserItem(items.items)
    }, [items])

    useEffect(() =>{
      if(userItems) {
        setExceptUserItems(
          // userItems
          userItems.filter((item)=>item.user!=user.email)
        );
      }
    }, [userItems])

    const {user} = useSelector((state) => state.auth)

    useEffect(() => {
      if(!user) {
        toast.warning("Please login first to access", {
          position: toast.POSITION.TOP_CENTER,
          theme: "light",
        })
      }
    }, [user])
    


  return (
    <div className='items-container'>
      {
        (exceptUserItems.length !== 0) ? (
          <>
            {
              exceptUserItems.map((item, idx) => (
                <Item item={item} key={idx} />
              ))
            }
          </>
        ) : (
          <div className='center-div'>
            <span className="loader"></span>
          </div>
        )
      }
    </div>
  )
}

export default ViewAllItems