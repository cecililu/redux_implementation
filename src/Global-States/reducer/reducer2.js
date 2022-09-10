import { PENDING, SUCCESS,FAILURE } from "../Action-Creator/reducer2Action"

  
  const initialState={
    data:[],
    err:'',
    loading:false

  }
  const reducer2=(state=initialState,action)=>{
    switch (action.type){
        case PENDING:{
            return {
                data:[],
                error:'',
                loading:true

            }
        }
        case SUCCESS:{
            return {
                data:action.payload,
                error: "",
                loading:false}
         }
        case FAILURE:{
            return {
                 data:[],
                 error:action.payload,
                 loading:true
                }
        }
        default:{
            return{...state}
        }

    }

  }
export default reducer2