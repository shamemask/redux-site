import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import EmployeeList from './employee/EmployeeList';
import AddEmployee from './employee/AddEmployee';
import UpdateEmployee from './employee/UpdateEmployee';
import DeleteEmployee from './employee/DeleteEmployee';
import Error from './employee/Error';
import './App.css';

function App2() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Employee List</Link>
          </li>
          <li>
            <Link to="/add">Add Employee</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route  path="/" element={<EmployeeList/>} />
        <Route path="/add" element={<AddEmployee/>} />
        <Route path="/update" element={<UpdateEmployee/>} />
        <Route path="/delete" element={<DeleteEmployee/>} />
        <Route path="/update/:id" element={<UpdateEmployee/>} />
        <Route path="/delete/:id" element={<DeleteEmployee/>} />
        <Route element={Error} />
      </Routes>
    </div>
  );
}

export default App2;