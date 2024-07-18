import React, { Component } from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import { FormSelect, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { updateEmployee } from "../services/EmployeeServices";
import { useState } from "react";

const UpdateEmployeeModal = (props) => {
  const [phoneError, setPhoneError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(props.employee.empID, e.target).then(
      (result) => {
        alert(result);
        props.setUpdated(true);
      },
      (error) => {
        alert("Failed to Update Employee Details");
      }
    );
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
            Update Employee Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="empID">
                  <Form.Label>Emp ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="empID"
                    required
                    defaultValue={props.employee.empID}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="firstname">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstname"
                    required
                    defaultValue={props.employee.firstname}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="lastname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastname"
                    required
                    defaultValue={props.employee.lastname}
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    required
                    defaultValue={props.employee.email}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="dept">
                  <Form.Label>Department</Form.Label>

                  <Form.Select
                    name="dept"
                    required
                    defaultValue={props.employee.dept}
                    placeholder=""
                  >
                    <option>Front End</option>
                    <option>Back End</option>
                    <option>Full Stack</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    required
                    defaultValue={props.employee.phone}
                    onChange={handlePhoneChange}
                    isInvalid={phoneError}
                    placeholder=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Phone number must be 10 digits.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="add">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="add"
                    required
                    defaultValue={props.employee.add}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="sal">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control
                    type="text"
                    name="sal"
                    required
                    defaultValue={props.employee.sal}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group>
                  <p></p>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateEmployeeModal;
