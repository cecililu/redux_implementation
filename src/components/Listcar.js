
import { Button, Paper, Typography } from '@mui/material'

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
   const dat=useSelector((state)=>state.APIreducer)
   console.log('useSeletor',dat.data)
   const list=dat.data.map(data=>{
    return (
      <Paper key={data.alpha2Code} elevation={3} sx={{p:4,justifyContent: 'center'}}>
        <Typography   sx={{m:1,mt:4,}} variant="subtitle1" component="div">
          {data.name}
        </Typography>
      </Paper>
    );

   })
  return (
    <div>
      <Button  sx={{m:1,mt:4,mx:4}} variant="contained" color="success" onClick={() =>fetchAPIhandler(dispatch)}>Get CAR LIST</Button>
      {/* { (data.loading) ? "loading..." : data.map(dat=>dat.name) } */}
      {( dat.loading) ? "loading...":list}
    </div>
  )
}
