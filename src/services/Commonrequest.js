import axios from "axios";

export const commonRequest=async(method,url,body)=>{

    let reqConfiq={

    
    url,
    method,
    data:body,
    headers:{
          "content-type":"application/json"

        }
    }

    // api call using axios library

    return await axios( reqConfiq).then((response)=>{
        return response

    }).catch ((error)=>{

        return error
    })
}