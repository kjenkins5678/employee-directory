import React from "react";
import "./style.css";

function EmployeeCard(props) {

const { employees } = props;

  return (
    <table>
      <caption>Table of Employees</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
      {employees.map(employee => (
        <tr key={employee.id}>
          <td>{employee.name}</td>
          <td>{employee.occupation}</td>
          <td>{employee.location}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default EmployeeCard;
