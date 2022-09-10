//action types
 export const BUY_NOW='buy-car'
 export const SELL_NOW='sell-car'
 



 //action Creator
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
