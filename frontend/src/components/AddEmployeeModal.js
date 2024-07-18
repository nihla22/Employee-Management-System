import React, { useState } from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import {
  addEmployee,
  checkEmpIDExists,
  checkPhoneExists,
} from "../services/EmployeeServices";

const AddEmployeeModal = (props) => {
  const [phoneError, setPhoneError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    addEmployee(e.target)
      .then((result) => {
        alert(result);
        props.setUpdated(true);
        props.onHide(); // Optional: close modal on success
      })
      .catch((error) => {
        console.error("Failed to Add Employee", error);
        alert("Failed to Add Employee");
      });
  };

  const handlePhoneChange = (e) => {
    setPhoneError(e.target.value.length !== 10);
  };

  return (
    <div className="container">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Fill The Employee Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="empID">
                  <Form.Label>Emp ID</Form.Label>
                  <Form.Control type="text" name="empID" required />
                </Form.Group>
                <Form.Group controlId="firstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="firstname" required />
                </Form.Group>
                <Form.Group controlId="lastname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lastname" required />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="email" required />
                </Form.Group>
                <Form.Group controlId="dept">
                  <Form.Label>Department</Form.Label>
                  <Form.Select name="dept" required>
                    <option>Front End</option>
                    <option>Back End</option>
                    <option>Full Stack</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    required
                    onChange={handlePhoneChange}
                    isInvalid={phoneError}
                  />
                  <Form.Control.Feedback type="invalid">
                    Phone number must be 10 digits.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="add">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" name="add" required />
                </Form.Group>
                <Form.Group controlId="sal">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control type="text" name="sal" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddEmployeeModal;
