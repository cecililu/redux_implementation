


import { configureStore } from "@reduxjs/toolkit"
import reducer1 from "../reducer/reducer1"
export const store= configureStore({
    reducer:{
      reducer1
    }
  })