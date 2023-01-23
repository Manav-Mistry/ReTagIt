import React from 'react'
import Item from './Item'
import "../style/item.css"

function Items() {
  return (
    <div className='items-container'>
        <Item imgName={"logo-01.png"}/>
        <Item imgName={"moonnight.jpg"}/>
        <Item imgName={"logo-01.png"}/>
        <Item imgName={"moonnight.jpg"}/>
        <Item imgName={"logo-01.png"}/>
        <Item imgName={"moonnight.jpg"}/>
        <Item imgName={"logo-01.png"}/>
    </div>
  )
}

export default Items