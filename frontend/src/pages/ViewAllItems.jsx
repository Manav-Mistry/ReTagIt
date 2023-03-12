import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Item from '../components/Item';
import "../style/items.css"

function ViewAllItems() {
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

export default ViewAllItems