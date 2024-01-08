import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Add from "./Add";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Users } from "react-feather";
import Cardview from "./Cardview";

function Home() {
  const [serverRes, setserverResponse] = useState({});
  const [deleteStatus, setdeleteStatus] = useState(false);

  const handleResponse = (res) => {
    setserverResponse(res);
  };

  const handleDeleteStatus = (res) => {
    setdeleteStatus(res);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ textDecoration: "none" }}>
            <Users color="white" />
            <span style={{ fontWeight: "200px", color: "white" }}>
              User Details
            </span>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div className="d-flex justify-content-center align-items-center bg-light vh-50">
        <h1>List Of Users</h1>
      </div>

      <Row>
        <Col lg={2} className="cards">
          <Add />
        </Col>

        <Col lg={9}>
          <Cardview handleDeleteStatus={handleDeleteStatus} />
        </Col>
      </Row>
    </>
  );
}

export default Home;
