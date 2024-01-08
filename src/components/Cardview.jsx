import React, { useEffect, useState } from "react";
import { deleteUser, getUser } from "../services/allapi";
import Button from "react-bootstrap/Button";
import serverRes from "./Home";
import deleteStatus from "./Home";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cardview({  handleDeleteStatus }) {
  const [allUsers, setallUsers] = useState([]);

  const getallUser = async () => {
    let response = await getUser();
    // console.log(response);
    setallUsers(response.data);
  };
  console.log(allUsers);

  useEffect(() => {
    getallUser();
  }, [serverRes, deleteStatus]);

  const removeItem = async (id) => {
    let response = await deleteUser(id);
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      handleDeleteStatus(true);
    }
  };

  return (
    <>
   

  
     <Row>
        {allUsers.map((user) => (
        
          <div className="card text-center shadow col-md-4" card={user}>
          
                <img
                  className="image"
                  style={{ width: "40%", height: "40%" }}
                  src={user?.image}
                />
              
              <div className="card-body text-dark">
                <p className="card-title">ID:{user?.id}</p>
                <p className="card-title">Name:{user?.name}</p>
                <p className="card-title">Phone:{user?.phone}</p>
                <p className="card-title">Email:{user?.email}</p>

                <div>
                  <Button onClick={() => removeItem(user?.id)} variant="danger">
                    Delete
                  </Button>
                 <Link to={`/singleview/${user?.id}` }> <Button variant="primary">
                  View
                  </Button>
                  </Link> 
                 <Link to={`/edit/${user?.id}` }> <Button variant="success"  >
                  Edit</Button></Link>
                </div>
               
              </div>
         
             
           
          </div>
        ))}
     </Row>
      
    </>
  );
}

export default Cardview;
