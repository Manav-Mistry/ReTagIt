import React from 'react'
import Currency from 'react-currency-icons'


import "../style/item.css"

function Item({imgName}) {
  return (
    <div className='item'>
        <div className="item-img-container">
            <img className='item-image' src={require(`../img/${imgName}`)} alt="" />
            <div className="inr-currency">
              
              <Currency code="INR" size="small" />
            </div>
        </div>
        <div className='about-item'>
            <div className='item-price'>1000</div>
            <div className='item-title'>Mobile</div>
            <div className='item-details'>POCO M3</div>
            <div className='item-location'>
                Tilak nagar, delhi
            </div>
        </div>
    </div>
  )
}

export default Item