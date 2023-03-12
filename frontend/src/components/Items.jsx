import React, { useEffect } from 'react'
import Item from './Item'
import "../style/item.css"
import { getAllItems } from "../features/Items/itemSlice"
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';

import "../style/items.css"

function Items() {
  
  const { isError, isLoading, isSuccess, message, items } = useSelector((state) => state.item)
  
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