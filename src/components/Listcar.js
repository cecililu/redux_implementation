
import { Button } from '@mui/material'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pendingAction, successAction } from '../Global-States/Action-Creator/reducer2Action'

const fetchAPIhandler=async(dispatch)=>{
  dispatch(pendingAction()) 
  const data=await fetch('https://restcountries.com/v2/all');
  const dat= await data.json();
  dispatch(successAction(dat))
  
}

export const Listcar = () => {
   const dispatch=useDispatch()
   const data=useSelector((state)=>state.APIreducer)
   console.log(data)
  return (
    <div>
      <Button  sx={{m:1,mt:4}} variant="contained" color="success" onClick={() =>fetchAPIhandler(dispatch)}>Get CAR LIST</Button>
      {/* { (data.loading) ? "loading..." : data.map(dat=>dat.name) } */}
      {/* {(data.loading) ? "loading...": data.map(item=>item.name)} */}
    
      
    


    </div>
  )
}
