import React, { useEffect, useState } from 'react'
import {Card} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getSingle } from '../services/allapi'


function Singleview() {

  const {id}= useParams()
  const [contactDetails,setcontactDetails]=useState({})

  useEffect(() =>{
        if (id) {
          getSingle(id)
          .then(res=>{
            console.log('Fetched contact details:',res.data);
            setcontactDetails(res.data);
          })
          .catch(error =>{
            console.error('Error in fetching contact details',error);
          });
        }
  },[id]);
  return (
    <>
    <div className='container'style={{height:'80vh'}}>


     { 
     contactDetails?(

      <Card className='shadow  mt-5 p-3'>
      <div className='image text-center'>
      <img style={{ width: '70px', height: '70px' }} src={contactDetails.image} alt="no image" />

      </div>
      <div className='text-center' > 
      <h3>Id:{contactDetails.id}</h3>
      <h3>Name:{contactDetails.name}</h3>
      <h3>phone:{contactDetails.phone}</h3>
      <h3>email:{contactDetails.email}</h3>
 
      </div>
    </Card>

     ): (
      <p> Loading....</p>
     )
    
      }

    </div>
    </>
  )
}

export default Singleview