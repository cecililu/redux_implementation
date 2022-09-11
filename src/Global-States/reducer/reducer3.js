import { createSlice, configureStore } from '@reduxjs/toolkit'


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0
    }
    , 

    reducers:{

    increment:(state)=>{
        state.value += 1
    },
    decrement:(state)=>{
        state.value += 1
    }

   }

})
export const { incremented, decremented } = counterSlice.actions
export default  counterSlice;