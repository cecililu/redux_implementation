import { BUY_NOW,SELL_NOW } from "../Action-Creator/reducer1Action";



//reducer
const initialState={ 
    cost:0,quantity:0
}
 const reducer1=(state=initialState,action)=>{
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
  export default reducer1;