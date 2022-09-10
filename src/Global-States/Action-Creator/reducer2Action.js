
 export const SUCCESS='success'
 export const PENDING='pending'
 export const FAILURE='failure'

 export const pendingAction=()=>{
    return {
        type:PENDING,
    }

 }

 export const successAction=(data)=>{
    return {
        type:SUCCESS,
        payload:data
    }

 }

 export const failureAction=(err)=>{
    return {
        type:FAILURE,
        payload:err
    }

 }