import logo from './logo.svg';
import './App.css';
import { configureStore } from '@reduxjs/toolkit'

//action types
export const BUY_NOW='buy-car'
export const SELL_NOW='sell-car'


//reducer
const initialState={cost:0,quantity:0}
const  reducer1=(initialState,action)=>{
   switch(action.type){
   case BUY_NOW:{
    return {
      ...state,
      cost: initialState.cost+100000,
      quantity:initialState.quantity+1
    };
  }
  case SELL_NOW:{
    return {
      ...state,
      cost:  initialState.cost-100000,
      quantity: initialState.quantity-1

    }
  }
   } 
}

//store
const store=configureStore({
  reducer:reducer1,
})

function App() {
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
