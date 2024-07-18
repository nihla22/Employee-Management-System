import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";

import { Button, ButtonToolbar } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

import { getEmployee, deleteEmployee } from "../services/EmployeeServices";
import AddEmployeeModal from "./AddEmployeeModal";
import UpdateEmployeeModal from "./UpdateEmployeeModal";

const Manage = () => {
  const [employee, setEmployee] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);

  const [editModalShow, setEditModalShow] = useState(false);
  const [editEmployee, setEditEmployee] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (employee.length && !isUpdated) {
      return;
    }
    getEmployee().then((data) => {
      if (mounted) {
        setEmployee(data);
      }
    });
    return () => {
      mounted = false;
      setIsUpdated(false);
    };
  }, [isUpdated, employee]);

  const handleUpdate = (e, emp) => {
    e.preventDefault();
    setEditModalShow(true);
    setEditEmployee(emp);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setAddModalShow(true);
  };

  const handleDelete = (e, empID) => {
    if (window.confirm("Are you Sure")) {
      e.preventDefault();
      deleteEmployee(empID).then(
        (result) => {
          alert(result);
          setIsUpdated(true);
        },
        (error) => {
          alert("Failed to Delete Employee");
        }
      );
    }
  };

  const EditModelClose = () => setEditModalShow(false);
  const AddModelClose = () => setAddModalShow(false);
  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <p id="manage"></p>
        <Table
          striped
          bordered
          hover
          className="react-bootstrap-table"
          id="dataTable"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.empID}</td>
                <td>{emp.firstname}</td>
                <td>{emp.lastname}</td>
                <td>{emp.email}</td>
                <td>{emp.dept}</td>
                <td>{emp.phone}</td>
                <td>{emp.add}</td>
                <td>{emp.sal}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={(event) => handleDelete(event, emp.empID)}
                  >
                    <RiDeleteBin5Line />
                  </Button>
                  <span>&nbsp;&nbsp;</span>
                  <Button
                    className="mr-2"
                    variant="primary"
                    onClick={(event) => handleUpdate(event, emp)}
                  >
                    <FaEdit />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button variant="primary" onClick={handleAdd}>
            Add Employee <IoMdAdd size="25px" />
          </Button>
        </ButtonToolbar>
      </div>
      <AddEmployeeModal
        show={addModalShow}
        setUpdated={setIsUpdated}
        onHide={AddModelClose}
      ></AddEmployeeModal>
      <UpdateEmployeeModal
        show={editModalShow}
        employee={editEmployee}
        setUpdated={setIsUpdated}
        onHide={EditModelClose}
      ></UpdateEmployeeModal>
    </div>
  );
};

export default Manage;
