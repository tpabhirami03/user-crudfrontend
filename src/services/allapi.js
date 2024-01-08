
import { commonRequest } from "./Commonrequest";
import { BASE_URL } from "./baseurl";


 export const addUser=async(body)=>{

 return await  commonRequest("POST",`${BASE_URL}/user`,body)
}


// get user

export const getUser=async()=>{

    return await  commonRequest("GET",`${BASE_URL}/user`,"")
    
  }

  export const getSingle=async(id)=>{

    return await  commonRequest("GET",`${BASE_URL}/user/${id}`,"")
    
  }

  // update
  
  export const contactEdit=async(id,body)=>{

    return await  commonRequest("PUT",`${BASE_URL}/user/${id}`,body)
    
  }





  // delete a user

  export const deleteUser=async(id)=>{

    return await  commonRequest("DELETE",`${BASE_URL}/user/${id}`,{})
}
