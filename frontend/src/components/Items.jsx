import React, { useEffect } from 'react'
import Item from './Item'
import "../style/item.css"
import { getAllItems, reset } from "../features/requestedItem/requestedItemSlice"
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { toast } from "react-toastify";

import "../style/items.css"

function Items() {
    const { items } = useSelector((state) => state.item)
    const { isError, isLoading, isSuccess, message } = useSelector((state) => state.requestedItem)

    const dispatch = new useDispatch()
  
    useEffect( () => {
      if(isSuccess) {
        console.log("toast", message)
        toast.success(message, {
          position: toast.POSITION.TOP_CENTER,
          theme: "dark",
        })
        // toast.success("")
      } 
      else if(isError) {
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER,
          theme: "dark",
        })
      }
      console.log("--- item ---")
      dispatch(reset())
    }, [message, isError, isSuccess, dispatch])
  
  const userItems = items.items

  return (
    <div className='items-container'>
      {
        userItems ? (
          <>
            {
              userItems.map((item, idx) => (
                <Item item={item} key={idx} />
              ))
            }
          </>
        ) : (
          <>
            
            <span className="loader"></span>
          </>
        )
      }
    </div>
  )
}

export default Items