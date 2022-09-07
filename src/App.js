
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Homepage } from './Homepage.js';
import { buyCarAction, sellCarAction } from './Global-States/Action-Creator/reducer1Action';
import { Button, Card, Paper, Typography } from '@mui/material';





function App() {
  const dispatch=useDispatch()
  //console.log(cart);
  const cart= useSelector((state)=>state.reducer1)
  return (
   
    <div className="App">
      
      <Paper variant="outlined" sx={{width:'90%',m:4,p:4,alignItems:'center'}}>
      <Typography   sx={{m:4,color:"red"}} align='center' variant="h4" component="div">BUY A CAR NOW</Typography>


       <Paper elevation={3} sx={{p:4}}>
      <Typography   sx={{m:1,mt:4,}} variant="subtitle1" component="div"><Homepage/></Typography>
      
      <Button  sx={{m:1,mt:4}} variant="contained" color="success" onClick={() =>dispatch(buyCarAction())} >click to buy car</Button><br/>
      <Button  sx={{m:1}}  variant="outlined" color="error"onClick={() =>dispatch(sellCarAction())} disabled={cart.quantity ?false:true} >click to SELL car</Button>
      </Paper>
       </Paper>
      
    </div>

  );
}

export default App;
