import React from 'react'
import { useEffect } from 'react'
import {viewAllRequests, reset} from "../features/requestedItem/requestedItemSlice"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import RItems from '../components/RItems'


function ViewAllRequests() {
  const {r_items, isLoading, isError, isSuccess, message, item_swaped} = useSelector((state) => state.requestedItem)


  const dispatch = useDispatch()
  useEffect(() => {
    console.log("In view all requests")
    dispatch(viewAllRequests())
  }, [])

  useEffect(() => {
    dispatch(viewAllRequests())
  }, [item_swaped])

  useEffect(() => {
    dispatch(reset())
  }, [isError, isSuccess, message,item_swaped, dispatch])

  return (
    <>

      { (r_items.length != 0) ? (
        <>
          <h1>All Requests </h1>
          <div>
            <RItems r_items={r_items}/>
          </div>
        </>
      ) : (
        <div className='center-div'>
            <img src="./img/empty.svg" width={500}/>
            <h2 style={{"textAlign" : "center", "padding": "1rem"}}> No Requests </h2>
        </div>
        
      )}
      
    </>
  )
}

export default ViewAllRequests