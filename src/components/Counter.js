import { Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decremented, incremented } from '../Global-States/reducer/reducer3'

export const Counter = () => {
    const dispatch=useDispatch()
     const data= useSelector((state)=>state.counterReducer)
   console.log(data)  
   return (
      <div>

        <Paper>
        <Typography sx={{m:1,mx:4}} variant="h4" align='center' component="div"> Counter App</Typography>
        <Button sx={{m:2,mt:4,mx:4}} variant="contained" color="success" onClick={()=>dispatch(incremented())} >Increment </Button>
        
        <Typography sx={{m:1,mx:4}} variant="subtitle1" component="div"> {data.value}</Typography>
       
        <Button sx={{m:1,mx:4}} variant="contained" color="success" onClick={()=>dispatch(decremented())}> Decrement </Button>
        </Paper>
       </div>
  )
}
