import logo from './logo.svg';
import './App.css';
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Homepage } from './Homepage';

//action types
export const BUY_NOW='buy-car'
export const SELL_NOW='sell-car'
export const buyCarAction=()=>{
  return {
    type: BUY_NOW,
  }
}
export const sellCarAction=()=>{
  return {
    type: SELL_NOW,
  }
}
//reducer
const initialState={ 
  cost:0,quantity:0}
const  reducer1=(state=initialState,action)=>{
   switch(action.type){
   case BUY_NOW:{
    return {
      ...state,
      cost: state.cost+100000,
      quantity:state.quantity+1
    };
  }
  case SELL_NOW:{
    return {
      ...state,
      cost:  state.cost-100000,
      quantity: state.quantity-1

    }
  }
  default:
  return state
   } 
}

//store
export const store= configureStore({
  reducer:{
    reducer1
  }
})

function App() {
  const dispatch=useDispatch()
  //console.log(cart);
  const cart= useSelector((state)=>state.reducer1)
  return (
   
    <div className="App">
      <button onClick={() =>dispatch(buyCarAction())} >click to buy car</button><br/>
      <button onClick={() =>dispatch(sellCarAction())} disabled={cart.quantity ?false:true} >click to SELL car</button>
      <Homepage></Homepage>
    </div>

  );
}

export default App;
