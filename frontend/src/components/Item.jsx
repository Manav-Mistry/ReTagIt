import React from 'react'
import Currency from 'react-currency-icons'
import "../style/item.css"

function Item({item}) {

  console.log( "port" ,process.env.REACT_APP_API_URL_IMG)


  return (
    <div className='item'>
        <div className="item-img-container">
            <img 
              className='item-image' 
              loading='lazy' 
              src={`http://localhost:5000/api/image/image/${item.selectedFile}`} alt="" />
            {/* <div className="inr-currency">
              
              <Currency code="INR" size="small" />
            </div> */}
        </div>
        <div className='about-item'>
            {/* <div className='item-price'>1000</div>
            <div className='item-title'>Mobile</div>
            <div className='item-details'>POCO M3</div>
            <div className='item-location'>
                Tilak nagar, delhi
            </div> */}
              <div className='item-price'>{item.price}</div>
              <div className='item-title'>{item.title}</div>
             <div className='item-details'>{item.description}</div>
             <div className='item-location'>
                 {item.neighbourhood} {item.city} {item.state}
             </div> 
             <div className="btn-ask">
              <button className='ask-btn'>Request</button>
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