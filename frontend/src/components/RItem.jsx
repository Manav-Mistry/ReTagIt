import React from 'react'
import "../style/item.css"

function RItem({r_item}) {
    const acceptRequest = (r_item) => {

    }

    const deniedRequest = () => {

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
             <div className="btn-ask">
              <button className='ask-btn' onClick={() => acceptRequest(item)} >Request</button>
             </div>
        </div>
    </div>
  )
}

export default RItem