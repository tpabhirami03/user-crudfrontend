import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactEdit, getSingle } from "../services/allapi";

function Edit() {
  const [contactData, setcontactData] = useState({
    name: "",
    phone: "",
    email: "",
    image: ""
   
  });

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    // Fetching details
    getSingle(id)
      .then((response) => {
        setcontactData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Details", error);
      });
  }, [id]);

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;

    setcontactData(
      (prevData) => ({
        ...prevData,
        [fieldName]: value,
      }),
      () => {
        console.log(contactData);
      }
    );
  };

  const handleSubmit = async () => {
    await contactEdit(id, contactData)
      .then(() => {
        toast.success("Updated successfully.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/card");
      })
      .catch((error) => {
        console.error("Error updating contact:", error);
      });
  };

  return (
    <>
      <section className="add-contact">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4">Edit Contact</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={contactData.name}
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile Number"
                    value={contactData.phone}
                    onChange={(e) => handleInputChange(e, "number")}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={contactData.email}
                    onChange={(e) => handleInputChange(e, "email")}
                  />
                </div>

               
               
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Photo url"
                    value={contactData.image}
                    onChange={(e) => handleInputChange(e, "imageurl")}
                  />
                </div>
              
                <div className="m-4">
                  <input
                    type="button"
                    className="btn btn-primary"
                    value="Update"
                    onClick={handleSubmit}
                  />
                  <Link to={"/card"} className="btn btn-dark ms-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img
                src={contactData.image}
                alt="image not found"
                className="contact-img"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Edit;
