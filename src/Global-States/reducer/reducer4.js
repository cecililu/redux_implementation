
import { createSlice} from '@reduxjs/toolkit'
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      data: []
    }
    , 
    reducers:{
   }

})
export const { incremented, decremented } = counterSlice.actions
export default  counterSlice.reducer;