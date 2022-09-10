


import { configureStore } from "@reduxjs/toolkit"
import reducer1 from "../reducer/reducer1"
import reducer2 from "../reducer/reducer2"
export const store= configureStore({
    reducer:{
      reducer1,
      APIreducer:reducer2
    }
  })