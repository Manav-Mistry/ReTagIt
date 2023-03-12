import React, { useEffect } from 'react'
import Currency from 'react-currency-icons'
import "../style/item.css"
import { useSelector, useDispatch } from "react-redux";
import {addRequestedItem} from "../features/requestedItem/requestedItemSlice"
import { toast } from "react-toastify";
import { reset } from '../features/requestedItem/requestedItemSlice';

function Item({item}) {
  // getting logged user
  const { user } = useSelector((state) => state.auth) 

  // getting requested item details
  const { message, isError, isLoading, isSuccess } = useSelector((state) => state.requestedItem)
  const dispatch = new useDispatch()

  useEffect( () => {
    if(isSuccess) {
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
        theme: "light",
      })
    } 
    else if(isError) {
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark",
      })
    }
    dispatch(reset())
  }, [message, isError, isSuccess, dispatch])

  // const loggedUser = localStorage.getItem("user");

  const makeRequest = (item) => {
    if(user == null) {
      toast.warning("Please login first", {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark",
      })
    }
    // console.log(item)
    // console.log(user)
    const r_item_user = {
      item, 
      user
    }
    dispatch(addRequestedItem(r_item_user))
    console.log("after dispatch");
  }

  return (
    <div className='item'>
        <div className="item-img-container">
            <img 
              className='item-image' 
              loading='lazy' 
              src={`${process.env.REACT_APP_API_URL_IMG}/image/${item.selectedFile}`} alt="" />
            {/* <div className="inr-currency">
              
              <Currency code="INR" size="small" />
            </div> */}
        </div>
        <div className='about-item'>
            
             <div className='item-price'>{item.price}</div>
             <div className='item-title'>{item.title}</div>
             <div className='item-details'>{item.description}</div>
             <div className='item-location'>
                 {item.neighbourhood} {item.city} {item.state}
             </div>
             <div className="btn-ask">
              <button className='ask-btn' onClick={() => makeRequest(item)} >Request</button>
             </div>
        </div>
    </div>
  )
}

export default Item

//  <div className='item-price'>{item.price}</div>
//  <div className='item-title'>{item.title}</div>
// <div className='item-details'>{item.description}</div>
// <div className='item-location'>
//     {item.neighbourhood} {item.city} {item.state}
// </div> 