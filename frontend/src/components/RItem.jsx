import React from 'react'
import "../style/item.css"
import { BsCheckCircleFill } from 'react-icons/bs';
import { useSelector, useDispatch } from "react-redux"
import { acceptRequest} from "../features/requestedItem/requestedItemSlice"

function RItem({ r_item }) {
  const dispatch = useDispatch()

  const accept_Request = (r_item_id) => {
    const r_item = {
      "r_item_id" : r_item_id
    }
    dispatch(acceptRequest(r_item))
  }

  const denied_Request = (item) => {
    console.log(item)
  }

  const item = r_item.item

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
        <div className='success-reject-btns'>
          { r_item.isRequestComplete ? (
            <>
              <span className='accepted'>Accepted</span><BsCheckCircleFill size={25} color="green"/>
            </>
          ) : (
            <>
              <button className='reject-btn' onClick={() => denied_Request(r_item._id)} >Reject</button>
              <button className='success-btn' onClick={() => accept_Request(r_item._id)} >Accept</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default RItem