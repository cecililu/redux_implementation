import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decremented, incremented } from '../Global-States/reducer/reducer3'

export const Counter = () => {
    const dispatch=useDispatch()
   const data= useSelector((state)=>state.counterReducer)
   console.log(data)  
   return (
      <div>
        <Button onClick={()=>dispatch(incremented())} >Increment </Button>
        <br/>
     {/* {data.value} */}
         <br/>
        <Button onClick={()=>dispatch(decremented())}> Decrement </Button>
       </div>
  )
}
