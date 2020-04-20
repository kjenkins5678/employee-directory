import React from "react";
import employees from "../../employees.json"
import "./style.css";

class EmployeeTable extends React.Component {
  constructor() {
    super();
    this.state = {
      sortAsc: true,
    };
  }

  handleClick(e) {
    alert(e.target.id);
  }



  render() {
    return (
      <table className="table">
        <caption>Table of Employees</caption>
        <thead>
          <tr>
            <th 
              scope="col"
              id="name"
              onClick={this.handleClick}
            >Name</th>
            <th 
              scope="col"
              id="occupation"
              onClick={this.handleClick}
            >Occupation</th>
            <th 
            scope="col" 
            id="location"
            onClick={this.handleClick}
            >Location</th>
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
}

export default EmployeeTable;
