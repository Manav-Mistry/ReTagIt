import React from 'react'
import "../style/item.css"

function Item({imgName}) {
  return (
    <div className='item'>
        <div className="item-img-container">
            <img className='item-image' src={require(`../img/${imgName}`)} alt="" />
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