import axios from "axios";

export function getEmployee() {
  return axios
    .get("http://localhost:8000/employee/")
    .then((response) => response.data);
}

export function deleteEmployee(empID) {
  return axios
    .delete("http://localhost:8000/employee/" + empID + "/", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response.data.message || error.message);
    });
}

export function addEmployee(emp) {
  return axios
    .post("http://127.0.0.1:8000/employee/", {
      empID: emp.empID.value,
      firstname: emp.firstname.value,
      lastname: emp.lastname.value,
      email: emp.email.value,
      dept: emp.dept.value,
      phone: emp.phone.value,
      add: emp.add.value,
      sal: emp.sal.value,
    })
    .then((response) => response.data);
}

export function updateEmployee(empID, emp) {
  return axios
    .put("http://localhost:8000/employee/" + empID + "/", {
      empID: emp.empID.value,
      firstname: emp.firstname.value,
      lastname: emp.lastname.value,
      email: emp.email.value,
      dept: emp.dept.value,
      phone: emp.phone.value,
      add: emp.add.value,
      sal: emp.sal.value,
    })
    .then((response) => response.data);
}

export function checkEmpIDExists(empID) {
  return axios
    .get(`http://localhost:8000/employee/?empID=${empID}`)
    .then((response) => response.data);
}

export function checkPhoneExists(phone) {
  return axios
    .get(`http://localhost:8000/employee/?phone=${phone}`)
    .then((response) => response.data.length > 0);
}
