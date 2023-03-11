import React, { useEffect } from 'react'
import Item from './Item'
import "../style/item.css"
import { getAllItems } from "../features/Items/itemSlice"
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';

import "../style/items.css"

function Items() {
  // const [userItems, setUserItems] = useState(undefined);
  
  const { isError, isLoading, isSuccess, message, items } = useSelector((state) => state.item)
  
  const userItems = items.items
  // setUserItems(items.items)
  
  // const dispatch = useDispatch()
  
  // useEffect(() => {
  //   dispatch(getAllItems()).then((data)=>{
  //     setUserItems(data.payload.items)
  //     console.log("items here: ",items);
  //   })
  // }, []);
  


  return (
    <div className='items-container'>
        {/* <Item imgName={"logo-01.png"}/>
        <Item imgName={"moonnight.jpg"}/>
        <Item imgName={"logo-01.png"}/>
        <Item imgName={"moonnight.jpg"}/>
        <Item imgName={"logo-01.png"}/>
        <Item imgName={"moonnight.jpg"}/>
        <Item imgName={"logo-01.png"}/> */}



      {/* {items}  ? {
          items.map((item) => (
            // <Item item={item} key={item.id} />
            <h1> {item.title} </h1>
          ))
        } : <h1> No Item Found</h1> */}

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
            
            <span class="loader"></span>
          </>
        )
      }


    </div>
  )
}

export default Items