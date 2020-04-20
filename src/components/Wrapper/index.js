import React from "react";
import EmployeeTable from "../EmployeeTable";
import employees from "../../employees.json"
import "./style.css";

function Wrapper() {

  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Occupation',
      accessor: 'occupation',
    },
    {
      Header: 'Location',
      accessor: 'location',
    }
  ];

  const data = employees
return (
  <EmployeeTable columns={columns} data={data}>
    
  </EmployeeTable>
  );
}

export default Wrapper;
