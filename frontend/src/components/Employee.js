import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import axios from "axios";
import "../App.css";

const Employee = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/employee/");
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <p id="before-table"></p>
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Employee;
