import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json"

function App() {

    return (
      <Wrapper>
        <Title>Employee Directory</Title>
          <EmployeeCard
            employees={employees}
          />

      </Wrapper>
    );
  }

export default App;
